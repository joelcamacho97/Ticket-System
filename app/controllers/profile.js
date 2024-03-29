import Ember from 'ember';

export default Ember.Controller.extend({

    isModalShown: false,
    ref: Ember.inject.service('firebase'),

    actions: {

        apagar: function() {

            let ref = this.get('ref');

            ref.removeUser({
                email: this.get('session.currentUser.email'),
                password: this.get('password')
            }, function(error) {
                if (error === null) {
                    console.log("User removed successfully");
                } else {
                    console.log("Error removing user:", error);
                }
            });
        },

        toggleModal() {
            this.toggleProperty('isModalShown');
        },

        agree() {
            alert('Thanks for agreeing!');
            this.set('isModalShown', false);
        }
    }
});