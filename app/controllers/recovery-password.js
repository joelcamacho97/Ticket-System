import Ember from 'ember';
export default Ember.Controller.extend({

    tag: null,

    actions: {

        recuperar: function() {

            const truee = this.set('tag', true);
            var ref = new Firebase("https://brainpcn.firebaseio.com/");
            ref.resetPassword({
                email: this.get('email')
            }, function(error) {
                if (error === null) {
                    console.log("Password reset email sent successfully");
                } else {
                    console.log("Error sending password reset email:", error);
                    truee
                }
            });
        }
    }
});