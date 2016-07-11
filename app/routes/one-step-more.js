import Ember from 'ember';

export default Ember.Route.extend({

    redirect: function() {
        if (!this.get('session.isAuthenticated')) {
            this.transitionTo('login');
        }
    },
    beforeModel: function(transition) {

        return this.get('session').fetch()
            .catch(function() {
                // no-op, cause no session is ok
            })
    }
});