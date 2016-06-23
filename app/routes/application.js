import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service('session'),

    beforeModel() {


        if (this.get('session').get('isAuthenticated')) {
            return this.get("session").fetch().catch();
        }

    },

    actions: {

        logout: function() {
            this.get('session').close().then(function() {
                this.transitionTo('application');
            }.bind(this));
        }
    }
});