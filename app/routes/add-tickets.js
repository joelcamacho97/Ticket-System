import Ember from 'ember';
import configuration from 'torii/configuration';

export default Ember.Route.extend({




    beforeModel: function(transition) {

        return this.get('session').fetch()
            .catch(function() {
                // no-op, cause no session is ok
            })
    },

    actions: {

        logout: function() {
            this.get('session').close().then(function() {
                this.transitionTo('application');
            }.bind(this));
        }
    }
});