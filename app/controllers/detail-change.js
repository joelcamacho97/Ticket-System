import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),

    actions: {

        editar: function() {

            let ref = this.get('ref');

            if (this.get('name') === "" || this.get('name') === undefined) {
                this.set('name', '');
                this.set('error', true);

            } else {

                //  var fredNameRef = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('session.uid'));

                //    var uid = this.get('session.uid');

                ref.child('employers/' + this.get('session.uid') + "/Name").set(this.get('name'));
                this.set('name', '');
                this.transitionToRoute('profile');
                this.set('error', false);

            }
        },
        limpar: function() {

            this.set('name', '');

        }

    }

});