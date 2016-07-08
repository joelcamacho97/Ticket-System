import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),
    nif: false,
    erro: null,

    actions: {

        nif() {
            this.set('nif', true);
        },

        editar() {

            let ref = this.get('ref');
            var nif = this.get('nif');
            var id = null;
            var _this = this;

            if (nif === true && this.get('id') != "" && this.get('id') != undefined) {

                var id = this.get('model.id');
                var uid = this.get('id');

                ref.once("value", function(snapshot) { // verifica se o nif esta em uso ...
                    var b = snapshot.hasChild('customers/' + uid);
                    console.log(b);

                    if (b === true) {
                        _this.set('erro', "Não foi possivel alterar o nif por este estar em uso !!!");
                    } else {
                        ref.child('customers/' + id).remove();
                        ref.child('customers/' + _this.get('id'));
                        ref.child('customers/' + uid + '/Address').set(_this.get('model.Address'));
                        ref.child('customers/' + uid + '/City').set(_this.get('model.City'));
                        ref.child('customers/' + uid + '/Common_Name').set(_this.get('model.Common_Name'));
                        ref.child('customers/' + uid + '/Company_Name').set(_this.get('model.Company_Name'));
                        ref.child('customers/' + uid + '/Country').set(_this.get('model.Country'));
                        ref.child('customers/' + uid + '/Home_Email').set(_this.get('model.Home_Email'));
                        ref.child('customers/' + uid + '/Home_Phone').set(_this.get('model.Home_Phone'));
                        ref.child('customers/' + uid + '/Mobile').set(_this.get('model.Mobile'));
                        ref.child('customers/' + uid + '/Zip').set(_this.get('model.Zip'));
                        _this.transitionToRoute('customers'); //para não haver conflitos na pagina ...
                        _this.set('erro', null);

                    }
                });
            } else {

                if (this.get('id') === "" || this.get('id') === undefined && nif === true) {
                    this.set('erro', "Não foi possivel alterar o nif por este estar incorreto ou em falta no entanto os dados serão salvos excepto o nif em questão !!!");
                } else {
                    var uid = this.get('model.id');
                    ref.child('customers/' + uid + '/Address').set(this.get('model.Address'));
                    ref.child('customers/' + uid + '/City').set(this.get('model.City'));
                    ref.child('customers/' + uid + '/Common_Name').set(this.get('model.Common_Name'));
                    ref.child('customers/' + uid + '/Company_Name').set(this.get('model.Company_Name'));
                    ref.child('customers/' + uid + '/Country').set(this.get('model.Country'));
                    ref.child('customers/' + uid + '/Home_Email').set(this.get('model.Home_Email'));
                    ref.child('customers/' + uid + '/Home_Phone').set(this.get('model.Home_Phone'));
                    ref.child('customers/' + uid + '/Mobile').set(this.get('model.Mobile'));
                    ref.child('customers/' + uid + '/Zip').set(this.get('model.Zip'));
                    this.set('erro', null);
                }
            }
            this.set('nif', false);
        },
        limpar: function() {
            this.set('model.Address', '');
            this.set('model.City', '');
            this.set('model.Common_Name', '');
            this.set('model.Company_Name', '');
            this.set('model.Country', '');
            this.set('model.Home_Email', '');
            this.set('model.Home_Phone', '');
            this.set('model.Mobile', '');
            this.set('model.Zip', '');
        },
        nif_back() {
            this.set('nif', false);
        }
    }
});