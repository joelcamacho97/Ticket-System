import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {

        return Ember.RSVP.hash({
            model1: this.store.find('ticket', params.tickets),
            model2: this.store.find('employers', this.get('session.uid')),
        });

    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'model1', model.model1);
        Ember.set(controller, 'model2', model.model2);
        Ember.set(controller, 'editar', false);
    }
});