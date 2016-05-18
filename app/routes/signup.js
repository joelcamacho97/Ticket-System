import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({

    redirect: function() {
        if (this.get('session.isAuthenticated')) {
            this.transitionTo('dashboard');
        }
    },

    actions: {
        signUp: function() {
            //  var controller = this.get('controller');
            var firstName = this.controller.get('firstName');
            var lastName = this.controller.get('lastName');
            var email = this.controller.get('email');
            var password = this.controller.get('password');
            var ref = new Firebase("https://brainpcn.firebaseio.com");
            var _this = this;

            ref.createUser({
                email: email,
                password: password
            }, function(error, userData) {
                if (error) {
                    alert(error);
                } else {
                    _this.get('session').open('firebase', {
                        provider: 'password',
                        'email': email,
                        'password': password
                    }).then(function() {
                        var user = _this.store.createRecord('user', {
                            id: userData.uid,
                            firstName: firstName,
                            lastName: lastName
                        });
                        user.save()
                            .then(function() {
                                _this.transitionTo('dashboard');
                            });
                    });
                }
            });
        }
    }

});