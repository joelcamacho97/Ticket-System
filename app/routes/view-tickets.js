import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        console.log("ola")
        return this.store.find('tickets/nivel/1', params.tickets);
    }

});