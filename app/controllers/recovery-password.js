import Ember from 'ember';

export default Ember.Controller.extend({


    actions: {

        recuperar: function() {

            var ref = new Firebase("https://brainpcn.firebaseio.com/");
            var _this = this;

            ref.resetPassword({
                email: this.get('email')
            }, function(error) {
                if (error === null) {
                    console.log("Password reset email sent successfully");
                } else {
                    console.log("Error sending password reset email:", error);
                }
            });

        }
    }

});