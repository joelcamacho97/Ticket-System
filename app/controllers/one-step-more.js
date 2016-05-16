import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        salvar: function() {

            if (this.get('analise') === undefined) {
                var analise = false;
            } else {
                var analise = true;
            }

            if (this.get('orcamento') === undefined) {
                var orcamento = false;
            } else {
                var orcamento = true;
            }

            if (this.get('instalacao') === undefined) {
                var instalacao = false;
            } else {
                var instalacao = true;
            }

            if (this.get('manutencao') === undefined) {
                var manutencao = false;
            } else {
                var manutencao = true;
            }

            if (this.get('hardware') === undefined) {
                var hardware = false;
            } else {
                var hardware = true;
            }

            if (this.get('formação') === undefined) {
                var formação = false;
            } else {
                var formação = true;
            }

            if (this.get('icg') === undefined) {
                var icg = false;
            } else {
                var icg = true;
            }

            if (this.get('primavera') === undefined) {
                var primavera = false;
            } else {
                var primavera = true;
            }

            if (this.get('sage') === undefined) {
                var sage = false;
            } else {
                var sage = true;
            }

            if (this.get('outro') === undefined) {
                var outro = false;
            } else {
                var outro = this.get('outro');
            }

            var login = this.store.createRecord('employers', {
                'id': this.get('session.uid'),
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