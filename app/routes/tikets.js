import Ember from 'ember';

export default Ember.Route.extend({

    model() {

        return Ember.RSVP.hash({
            model1: this.store.query('ticket', {}),
            model2: this.store.query('ticket', {}),
        });
    },

    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'model1', model.model1);
        Ember.set(controller, 'model2', model.model2);
    }

});