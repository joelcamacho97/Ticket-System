import Ember from 'ember';

export default Ember.Controller.extend({

    isModalShown: false,
    abilitações: false,
    ver: true,
    actions: {

        editar: function() {
            this.set('ver', false);
            console.log(this.get('ver'));
        },

        toggleModal() {
            this.toggleProperty('isModalShown');
        },

        abilitações() {
            this.set('ver', true);
            this.toggleProperty('abilitações');
        },

        salvar_abilitacoes: function() {

            if (this.get('analise') === undefined || this.get('analise') === false) {
                var analise = false;
            } else {
                var analise = true;
            }

            if (this.get('orcamento') === undefined || this.get('orcamento') === false) {
                var orcamento = false;
            } else {
                var orcamento = true;
            }

            if (this.get('instalacao') === undefined || this.get('instalacao') === false) {
                var instalacao = false;
            } else {
                var instalacao = true;
            }

            if (this.get('manutencao') === undefined || this.get('manutencao') === false) {
                var manutencao = false;
            } else {
                var manutencao = true;
            }

            if (this.get('hardware') === undefined || this.get('hardware') === false) {
                var hardware = false;
            } else {
                var hardware = true;
            }

            if (this.get('formação') === undefined || this.get('formação') === false) {
                var formação = false;
            } else {
                var formação = true;
            }

            if (this.get('icg') === undefined || this.get('icg') === false) {
                var icg = false;
            } else {
                var icg = true;
            }

            if (this.get('primavera') === undefined || this.get('primavera') === false) {
                var primavera = false;
            } else {
                var primavera = true;
            }

            if (this.get('sage') === undefined || this.get('sage') === false) {
                var sage = false;
            } else {
                var sage = true;
            }

            if (this.get('outro') === undefined || this.get('outro') === false) {
                var outro = false;
            } else {
                var outro = this.get('outro');
            }

            var fredNameRef = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('model.id') + '/Ability/');
            var soft = new Firebase("https://brainpcn.firebaseio.com/employers/" + this.get('model.id') + '/Ability/software/');
            console.log(analise);

            fredNameRef.child('Analise').set(analise);
            fredNameRef.child('Orçamento').set(orcamento);
            fredNameRef.child('Instalação').set(instalacao);
            fredNameRef.child('Manutenção').set(manutencao);
            fredNameRef.child('Hardware').set(hardware);
            fredNameRef.child('Formação').set(formação);

            console.log(icg);

            soft.child('ICG').set(icg);
            /*  fredNameRef.child('Name').set(primavera);
              fredNameRef.child('Name').set(sage);
              fredNameRef.child('Name').set(outro);*/

            /*     this.set(analise, undefined);
                 this.set(orcamento, undefined);
                 this.set(instalacao, undefined);
                 this.set(manutencao, undefined);
                 this.set(hardware, undefined);
                 this.set(formação, undefined);*/





            /* Ability: {
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
        });*/


        }

    }

});