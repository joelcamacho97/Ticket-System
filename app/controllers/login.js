import Ember from 'ember';

export default Ember.Controller.extend({

    responseMessage: '',
    tipo: '',
    isValid: Ember.computed.match('userEmail', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),




    actions: {

        login: function() {

            console.log("1");

            var _this = this;

            this.get('session').open('firebase', {
                provider: 'password',
                'email': this.get('userEmail'),
                'password': this.get('userPassword')
            }).then(function() {
                console.log("2");
                var uid = this.get('session.uid');
                // var ref = new Firebase("https://brainpcn.firebaseio.com/employers");

                console.log(this.get('session'));
                console.log("3");
                this.get('session').once("value", function(snapshot) {
                    var c = snapshot.child(uid).exists();
                    console.log("oaaaaa" + c);
                    if (c === false) {

                        return _this.transitionToRoute('one-step-more');

                    } else {

                        _this.transitionToRoute('dashboard');

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