import Ember from 'ember';

export default Ember.Route.extend({
    redirect: function() {
        if (!this.get('session.isAuthenticated')) {
            this.transitionTo('login');
        }
    },

    model(tabela, ar, qry) {


        ar = null;

        return Ember.ArrayProxy.create({
            content: ar
        });

    },

    beforeModel: function(transition) {

        return this.get('session').fetch()
            .catch(function() {
                // no-op, cause no session is ok
            })
    },

});