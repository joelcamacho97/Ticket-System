import Ember from 'ember';

export default Ember.Route.extend({

    model() {

        return Ember.RSVP.hash({
            model1: this.store.query('tickets', {
                //   equalTo: nivel
            }),
            model2: this.store.query('tickets', 'nivel', {
                equalTo: '2'
            }).then((posts) => {
                return posts
            }),
        });
    },

    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'model1', model.model1);
        Ember.set(controller, 'model2', model.model2);
    }

});