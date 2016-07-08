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
    nome() {

        return "ola";

    }

});