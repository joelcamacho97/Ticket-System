import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        editar: function() {

            if (this.get('name') === "") {
                this.set('name', '');

            } else {

                var fredNameRef = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('session.uid'));
                fredNameRef.child('Name').set(this.get('name'));
                this.set('name', '');
                this.transitionToRoute('profile');

            }
        },
        limpar: function() {

            this.set('name', '');

        }

    }

});