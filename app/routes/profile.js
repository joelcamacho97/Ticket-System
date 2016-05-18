import Ember from 'ember';

export default Ember.Route.extend({
    redirect: function() {
        if (!this.get('session.isAuthenticated')) {
            this.transitionTo('login');
        }
    },

    model: function() {

        if (!this.get('session.isAuthenticated')) {
            this.transitionTo('login');
        }
        return this.store.find('employers', this.get('session.uid'));
    }



});