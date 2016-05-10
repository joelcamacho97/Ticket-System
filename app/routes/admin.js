import Ember from 'ember';

export default Ember.Route.extend({

    redirect: function() {
        if (!this.get('session.uid')) {
            this.transitionTo('login');
        }
    },

    actions: {

        model: function() {
            return this.store.find('user', this.get('session.uid'));

        }
    }
});