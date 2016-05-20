import Ember from 'ember';
export default Ember.Controller.extend({

    tag: null,

    actions: {


        recuperar: function() {

            //  var controller = Ember.Object.create();
            const truee = this.set('tag', true);

            var ref = new Firebase("https://brainpcn.firebaseio.com/");

            ref.resetPassword({
                email: this.get('email')
            }, function(error) {
                if (error === null) {

                    console.log("Password reset email sent successfully");
                    //     return this.set('tag', false);
                } else {
                    console.log("Error sending password reset email:", error);
                    truee
                    //this.set('tag', false);


                }

            });

        }
    }

});