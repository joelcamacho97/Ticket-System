import Ember from 'ember';

export default Ember.Controller.extend({

    responseMessage: '',
    tipo: '',
    isValid: Ember.computed.match('userEmail', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    ref: Ember.inject.service('firebase'),



    actions: {

        login: function() {
            let ref = this.get('ref');

            var _this = this;

            this.get('session').open('firebase', {
                provider: 'password',
                'email': this.get('userEmail'),
                'password': this.get('userPassword'),
            }).then(function() {

                var uid = this.get('session.uid');

                ref.on("value", function(snapshot) {

                    var c = snapshot.child('employers/' + uid).exists();

                    console.log(c);

                    if (c === false) {
                        _this.transitionToRoute('one-step-more');
                    } else {
                        this.transitionToRoute('dashboard');
                    }

                });



            }.bind(this)).catch(function(error) {
                if (error.code === 'INVALID_EMAIL') {
                    _this.set('tipo', "red");
                    _this.set('responseMessage', "Email invalido");
                } else if (error.code === 'INVALID_PASSWORD') {
                    _this.set('tipo', "red");
                    _this.set('responseMessage', "Passworrd invalida");
                } else if (error.code === 'INVALID_USER') {
                    _this.set('tipo', "red");
                    _this.set('responseMessage', "Este email não existe");
                } else {
                    _this.set('tipo', "");
                    _this.set('responseMessage', "");
                }
            });
            this.set('userEmail', '');
            this.set('userPassword', '');
        }

    }
});