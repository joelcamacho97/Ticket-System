import Ember from 'ember';

export default Ember.Controller.extend({

    isModalShown: false,
    abilitações: false,
    ver: true,
    ref: Ember.inject.service('firebase'),

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

        salvar_abilitacoes: function(outro) {

            let ref = this.get('ref');


            if (this.get('outro') === undefined || this.get('outro') === false || this.get('outro') === "") {
                outro = false;
            } else {
                outro = this.get('outro');
            }

            var uid = this.get('model.id');

            ref.child('employers/' + uid + '/Name').set(this.get('model.Name'));
            ref.child('employers/' + uid + '/Level').set(this.get('model.Level'));
            ref.child('employers/' + uid + '/Supervisor').set(this.get('model.Supervisor'));
            ref.child('employers/' + uid + '/Ability/Analise').set(this.get('model.Ability.Analise'));
            ref.child('employers/' + uid + '/Ability/Orçamento').set(this.get('model.Ability.Orçamento'));
            ref.child('employers/' + uid + '/Ability/Instalação').set(this.get('model.Ability.Instalação'));
            ref.child('employers/' + uid + '/Ability/Manutenção').set(this.get('model.Ability.Manutenção'));
            ref.child('employers/' + uid + '/Ability/Hardware').set(this.get('model.Ability.Hardware'));
            ref.child('employers/' + uid + '/Ability/Formação').set(this.get('model.Ability.Formação'));
            ref.child('employers/' + uid + '/Ability/software/ICG').set(this.get('model.Ability.software.ICG'));
            ref.child('employers/' + uid + '/Ability/software/Primavera').set(this.get('model.Ability.software.Primavera'));
            ref.child('employers/' + uid + '/Ability/software/SAGE').set(this.get('model.Ability.software.SAGE'));
            ref.child('employers/' + uid + '/Ability/software/outro').set(outro);

        }

    }

});