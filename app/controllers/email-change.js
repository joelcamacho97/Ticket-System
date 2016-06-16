import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),

    actions: {

        editar: function() {
            let ref = this.get('ref');
            //  var ref = new Firebase("https://brainpcn.firebaseio.com/");
            var _this = this;

            if (this.get('REmail') === this.get('inputEmail')) {
                ref.changeEmail({
                    oldEmail: this.get('session.currentUser.email'),
                    newEmail: this.get('inputEmail'),
                    password: this.get('Password')
                }, function(error) {
                    if (error === null) {
                        _this.get('session').close();
                        this.set('inputEmail', '');
                        this.set('REmail', '');
                        this.set('Password', '');
                        _this.transitionToRoute('profile');
                    } else {
                        console.log("Error changing email:", error);
                    }
                });
            } else {
                console.log("nao corresponde email !!");
            }
        },

        limpar: function() {

            this.set('inputEmail', '');
            this.set('REmail', '');
            this.set('Password', '');

        }

    }
});