import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        editar: function() {

            var ref = new Firebase("https://brainpcn.firebaseio.com/");
            var _this = this;

            if (this.get('RepitaPassword') === this.get('NovaPassword')) {

                ref.changePassword({
                    email: this.get('session.currentUser.email'),
                    oldPassword: this.get('PasswordAtual'),
                    newPassword: this.get('NovaPassword')
                }, function(error) {
                    if (error === null) {
                        _this.transitionToRoute('profile'); //ou outro preocesso de next para o preocesso qd concluido ...
                    } else {
                        console.log("Erro:", error);
                    }
                });
            } else {
                console.log("Nao corresponde ....");
            }
        }
    }
});