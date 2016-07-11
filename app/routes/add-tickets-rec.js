import Ember from 'ember';

export default Ember.Route.extend({
 redirect: function() {
        if (!this.get('session.isAuthenticated')) {
            this.transitionTo('login');
        }
    },
    model: function(params) {
        return this.store.find('customers', params.id);
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'erro', false);
    }


});