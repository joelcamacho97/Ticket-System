import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        return this.store.find('customers', params.id);
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'erro', false);
    }


});