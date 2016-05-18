import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        apagar: function() {

            var ref = new Firebase("https://brainpcn.firebaseio.com/");
            var _this = this;


            ref.removeUser({
                email: this.get('email'),
                password: this.get('password')
            }, function(error) {
                if (error === null) {
                    console.log("User removed successfully");
                } else {
                    console.log("Error removing user:", error);
                }
            });

        }
    }

});