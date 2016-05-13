import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        salvar: function() {

            var uid = this.get('session.uid');

            console.log(uid);

            var login = this.store.createRecord('employers', {
                'id': this.get('session.uid'),
                Name: this.get('userName'),

                Ability: {

                    "Analise": this.get('analise'),
                    "Orçamento": false,
                    "Instalação": false,
                    "Manutenção": false,
                    "Software": false,
                    "Hardware": false,
                    "Formação": false,
                    "software": {
                        "ICG": false,
                        "Primavera": false,
                        "SAGE": false
                    }

                }

            });

            login.save();

        }
    }




});



/*    Ability: {

                    "Analise": this.get('analise'),
                    "Orçamento": this.get('orcamento'),
                    "Instalação": this.get('instalacao'),
                    "Manutenção": this.get('manutencao'),
                    "Hardware": this.get('hardware'),
                    "Formação": this.get('formação'),
                    "software": {
                        "ICG": this.get('icg'),
                        "Primavera": this.get('primavera'),
                        "SAGE": this.get('sage')
                    },

                }*/