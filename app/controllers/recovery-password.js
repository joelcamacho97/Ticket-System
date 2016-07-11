import Ember from 'ember';
export default Ember.Controller.extend({

    responseMessage: '',
    isValid: Ember.computed.match('email', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    ref: Ember.inject.service('firebase'),
    firebaseApp: Ember.inject.service(),

    actions: {

        recuperar: function() {

            var _this = this;

            this.get('firebaseApp').auth().sendPasswordResetEmail(this.get('email')).then(function() {

                _this.set('tipo', "green");
                _this.set('responseMessage', "Email enviado com sucesso");


            }, function(error) {

                console.log(error)

                if (error !== null) {
                    _this.set('tipo', "red");
                    _this.set('responseMessage', "Email invalido");
                }
            });

            this.set('email', "");

        }
    }
});