import Ember from 'ember';

export default Ember.Controller.extend({

    responseMessage: '',
    tipo: '',
    isValid: Ember.computed.match('userEmail', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    ref: Ember.inject.service('firebase'),
    firebaseApp: Ember.inject.service(),


    actions: {

        login: function() {

            var _this = this;

            this.get('firebaseApp').auth().signInWithEmailAndPassword(this.get('userEmail'), this.get('userPassword')).then((user, error) => {

                this.get('ref').once("value", function(snapshot) {

                    var c = snapshot.child('employers/' + user.uid).exists();

                    if (c === false) {
                        _this.transitionToRoute('one-step-more');
                    } else {
                        _this.transitionToRoute('dashboard');
                    }

                });



            }).catch(function(error) {

                if (error.code === 'auth/wrong-password') {
                    _this.set('tipo', "red");
                    _this.set('responseMessage', "Passworrd invalida");
                } else if (error.code === 'auth/user-not-found') {
                    _this.set('tipo', "red");
                    _this.set('responseMessage', "Este email não existe");
                } else {
                    _this.set('tipo', "");
                    _this.set('responseMessage', "");
                }

            });

            this.set('userEmail', '');
            this.set('userPassword', '');

            return this.get('session').fetch().catch(function() {});
        }


    }
});