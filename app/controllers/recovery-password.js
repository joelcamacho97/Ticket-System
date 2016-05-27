import Ember from 'ember';
export default Ember.Controller.extend({

    responseMessage: '',
    isValid: Ember.computed.match('email', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        recuperar: function() {
            var _this = this;
            var ref = new Firebase("https://brainpcn.firebaseio.com/");
            ref.resetPassword({
                email: this.get('email')
            }, function(error) {
                if (error === null) {
                    _this.set('tipo', "success");
                    _this.set('responseMessage', "Email ...");
                } else {
                    _this.set('tipo', "warning");
                    _this.set('responseMessage', "Email invalido");
                }
            });
        }
    }
});