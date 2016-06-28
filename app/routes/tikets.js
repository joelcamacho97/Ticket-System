import Ember from 'ember';

export default Ember.Route.extend({

    model() {

        return Ember.RSVP.hash({
            model1: this.store.query('tickets/nivel/1', {}),
            model2: this.store.query('tickets/nivel/1', {}),
        });
    },

    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'model1', model.model1);
        Ember.set(controller, 'model2', model.model2);
    }

});