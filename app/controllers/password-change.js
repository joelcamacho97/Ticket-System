import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),

    actions: {

        editar: function() {

            let ref = this.get('ref');
            var _this = this;

            if (this.get('RepitaPassword') === this.get('NovaPassword')) {

                ref.changePassword({
                    email: this.get('session.currentUser.email'),
                    oldPassword: this.get('PasswordAtual'),
                    newPassword: this.get('NovaPassword')
                }, function(error) {
                    if (error === null) {
                        this.set('PasswordAtual', '');
                        this.set('RepitaPassword', '');
                        this.set('NovaPassword', '');
                        _this.transitionToRoute('profile'); //ou outro preocesso de next para o preocesso qd concluido ...
                    } else {
                        console.log("Erro:", error);
                    }
                });
            } else {
                console.log("Nao corresponde ....");
            }
        },

        limpar: function() {

            this.set('PasswordAtual', '');
            this.set('RepitaPassword', '');
            this.set('NovaPassword', '');
        }

    }
});