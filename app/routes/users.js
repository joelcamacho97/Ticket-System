import Ember from 'ember';

export default Ember.Route.extend({

    redirect: function() {

        //Usar este redirect para paginas que apenas os supervisores possam ter acesso ! 
        var _this = this;

        if (!_this.get('session.isAuthenticated')) {
            _this.transitionTo('dashboard');

        } else {

            var ref = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('session.uid'));
            ref.once("value", function(snapshot) {
                var b = snapshot.child("Supervisor").val();

                if (b === false) {
                    _this.transitionTo('dashboard');
                }
            });
        }
    },

    model() {
        return this.store.findAll('employers');
    }
});