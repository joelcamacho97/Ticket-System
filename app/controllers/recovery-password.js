import Ember from 'ember';
export default Ember.Controller.extend({

    responseMessage: '',
    isValid: Ember.computed.match('email', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    ref: Ember.inject.service('firebase'),

    actions: {

        recuperar: function() {
            let ref = this.get('ref');
            var _this = this;
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