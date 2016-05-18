import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        editar: function() {

            if (this.get('name') === "") {
                console.log("Insira aqui alogo -.-")

            } else {

                var fredNameRef = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('session.uid'));
                fredNameRef.child('Name').set(this.get('name'));

            }
        }

    }

});