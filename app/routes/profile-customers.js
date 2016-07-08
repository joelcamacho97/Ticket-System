import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        return this.store.find('customers', params.customers);
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'error', false);
    }

});