import Ember from 'ember';

export default Ember.Route.extend({

    /* error: function(reason, transition) {
         if (reason.status == 404)
             return true
         else
             this.transitionTo('r500');
     },*/

    /* redirect: function(reason, transition) {
         if (reason.status == 404) {
             this.transitionTo('login');
         }
     },*/


    actions: {

        logout: function() {
            this.get('session').close().then(function() {
                this.transitionTo('application');
            }.bind(this));
        }
    }
});