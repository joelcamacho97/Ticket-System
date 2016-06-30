import Ember from 'ember';



export default Ember.Controller.extend({

    actions: {

        salvar: function(analise, orcamento, instalacao, manutencao, hardware, formação, icg, primavera, sage, outro) {


            if (this.get('analise') === undefined) {
                analise = false;
            } else {
                analise = true;
            }

            if (this.get('orcamento') === undefined) {
                orcamento = false;
            } else {
                orcamento = true;
            }

            if (this.get('instalacao') === undefined) {
                instalacao = false;
            } else {
                instalacao = true;
            }

            if (this.get('manutencao') === undefined) {
                manutencao = false;
            } else {
                manutencao = true;
            }

            if (this.get('hardware') === undefined) {
                hardware = false;
            } else {
                hardware = true;
            }

            if (this.get('formação') === undefined) {
                formação = false;
            } else {
                formação = true;
            }

            if (this.get('icg') === undefined) {
                icg = false;
            } else {
                icg = true;
            }

            if (this.get('primavera') === undefined) {
                primavera = false;
            } else {
                primavera = true;
            }

            if (this.get('sage') === undefined) {
                sage = false;
            } else {
                sage = true;
            }

            if (this.get('outro') === undefined) {
                outro = false;
            } else {
                outro = this.get('outro');
            }

            var login = this.store.createRecord('employers', {
                id: this.get('session.uid'),
                Name: this.get('userName'),
                Ability: {
                    "Analise": analise,
                    "Orçamento": orcamento,
                    "Instalação": instalacao,
                    "Manutenção": manutencao,
                    "Hardware": hardware,
                    "Formação": formação,
                    "software": {
                        "ICG": icg,
                        "Primavera": primavera,
                        "SAGE": sage,
                        "outro": outro
                    }
                }
            });
            login.save();
            this.transitionToRoute('index');
        }
    }
});