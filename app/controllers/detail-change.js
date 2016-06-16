import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),

    actions: {

        editar: function() {

            let ref = this.get('ref');

            if (this.get('name') === "") {
                this.set('name', '');

            } else {

                //  var fredNameRef = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('session.uid'));

                //    var uid = this.get('session.uid');

                ref.child('employers/' + this.get('session.uid') + "/Name").set(this.get('name'));
                this.set('name', '');
                this.transitionToRoute('profile');

            }
        },
        limpar: function() {

            this.set('name', '');

        }

    }

});