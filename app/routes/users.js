import Ember from 'ember';

export default Ember.Route.extend({

    ref: Ember.inject.service('firebase'),

    redirect: function() {

        //Usar este redirect para paginas que apenas os supervisores possam ter acesso ! 
        let ref = this.get('ref');
        var _this = this;

        if (!_this.get('session.isAuthenticated')) {
            _this.transitionTo('dashboard');

        } else {

            ref.on("value", function(snapshot) {

                var uid = _this.get('session.uid');
                var b = snapshot.child('employers/' + uid + "/Supervisor").val();

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