import Ember from 'ember';

export default Ember.Route.extend({

    //this.store.find('ticket', params.tickets)

    model: function(params) {
        return Ember.RSVP.hash({
            model1: this.store.find('ticket', params.tickets), //this.store.findAll('occupation'),
            model2: this.store.find('ticket', params.tickets), //this.store.find('ticket', params.tickets) //this.store.findAll('person')
            /*this.store.query('tickets/log', {
                filter: {
                    ids: params.tickets
                }
            }).then(function(peters) {
                return peters
            }),*/
        });
    },

    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'model1', model.model1);
        Ember.set(controller, 'model2', model.model2);
    }
});