import Ember from 'ember';

export default Ember.Route.extend({

    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'erro', false);
    }

});