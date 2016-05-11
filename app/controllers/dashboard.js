import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        model: function() {
            return this.store.find('user', this.get('session.uid'));
        }
    }
});