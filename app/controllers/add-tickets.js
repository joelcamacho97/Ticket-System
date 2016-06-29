import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),
    erro: null,

    actions: {

        add(Análise, Cliente, Solicitante, Morada, Localidade, Telemovel, NIF, dateValue, hora, Recebido_por, Orçamento, Instalação, Manutenção, Software, Hardware, Formação, descrição) {

            let ref = this.get('ref');

            if (this.get('Cliente') === undefined || this.get('Cliente') === "") {
                Cliente = "N/A";
            } else {
                Cliente = this.get('Cliente');
            }
            if (this.get('Solicitante') === undefined || this.get('Solicitante') === "") {
                Solicitante = "N/A";
            } else {
                Solicitante = this.get('Solicitante');
            }
            if (this.get('Morada') === undefined || this.get('Morada') === "") {
                Morada = "N/A";
            } else {
                Morada = this.get('Morada');
            }
            if (this.get('Localidade') === undefined || this.get('Localidade') === "") {
                Localidade = "N/A";
            } else {
                Localidade = this.get('Localidade');
            }
            if (this.get('Telemovel') === undefined || this.get('Telemovel') === "") {
                Telemovel = "N/A";
            } else {
                Telemovel = this.get('Telemovel');
            }
            if (this.get('NIF') === undefined || this.get('NIF') === "") {
                NIF = "N/A";
            } else {
                NIF = this.get('NIF');
            }
            if (this.get('dateValue') === undefined || this.get('dateValue') === "") {
                dateValue = "N/A";
            } else {
                dateValue = this.get('dateValue');
            }
            if (this.get('hora') === undefined || this.get('hora') === "") {
                hora = "N/A";
            } else {
                hora = this.get('hora');
            }
            if (this.get('Recebido_por') === undefined || this.get('Recebido_por') === "") {
                Recebido_por = "N/A";
            } else {
                Recebido_por = this.get('Recebido_por');
            }
            if (this.get('Telemovel') === undefined || this.get('Telemovel') === "") {
                Telemovel = "N/A";
            } else {
                Telemovel = this.get('Telemovel');
            }
            if (this.get('Orçamento') === undefined || this.get('Orçamento') === "") {
                Orçamento = "Não";
            } else {
                Orçamento = "Sim";
            }
            if (this.get('Instalação') === undefined || this.get('Instalação') === "") {
                Instalação = "Não";
            } else {
                Instalação = "Sim";
            }
            if (this.get('Manutenção') === undefined || this.get('Manutenção') === "") {
                Manutenção = "Não";
            } else {
                Manutenção = "Sim";
            }
            if (this.get('Software') === undefined || this.get('Software') === "") {
                Software = "Não";
            } else {
                Software = "Sim";
            }
            if (this.get('Hardware') === undefined || this.get('Hardware') === "") {
                Hardware = "Não";
            } else {
                Hardware = "Sim";
            }
            if (this.get('Formação') === undefined || this.get('Formação') === "") {
                Formação = "Não";
            } else {
                Formação = "Sim";
            }
            if (this.get('descrição') === undefined || this.get('descrição') === "") {
                descrição = "Sim";
            } else {
                descrição = this.get('descrição');
            }
            if (this.get('Análise') === undefined || this.get('Análise') === "") {
                Análise = "Não";
            } else {
                Análise = "Sim";
            }

            this.store.query('tickets/nivel/1', {}).then((posts) => {

                var id = posts.compact().length + 1;

                ref.child('tickets/nivel/1s/' + id + '/Cliente').set(Cliente);
                ref.child('tickets/nivel/1s/' + id + '/Solicitante').set(Solicitante);
                ref.child('tickets/nivel/1s/' + id + '/Morada').set(Morada);
                ref.child('tickets/nivel/1s/' + id + '/Localidade').set(Localidade);
                ref.child('tickets/nivel/1s/' + id + '/Telemovel').set(Telemovel);
                ref.child('tickets/nivel/1s/' + id + '/NIF').set(NIF);
                ref.child('tickets/nivel/1s/' + id + '/dateValue').set(dateValue);
                ref.child('tickets/nivel/1s/' + id + '/hora').set(hora);
                ref.child('tickets/nivel/1s/' + id + '/Recebido_por').set(Recebido_por);
                ref.child('tickets/nivel/1s/' + id + '/Análise').set(Análise);
                ref.child('tickets/nivel/1s/' + id + '/Orçamento').set(Orçamento);
                ref.child('tickets/nivel/1s/' + id + '/Instalação').set(Instalação);
                ref.child('tickets/nivel/1s/' + id + '/Manutenção').set(Manutenção);
                ref.child('tickets/nivel/1s/' + id + '/Software').set(Software);
                ref.child('tickets/nivel/1s/' + id + '/Hardware').set(Hardware);
                ref.child('tickets/nivel/1s/' + id + '/Formação').set(Formação);
                ref.child('tickets/nivel/1s/' + id + '/descrição').set(descrição);
                ref.child('tickets/nivel/1s/' + id + '/nivel').set(1);
                ref.child('tickets/nivel/1s/' + id + '/estado').set("pendente");
            });

            this.set('Cliente', "");
            this.set('Solicitante', "");
            this.set('Morada', "");
            this.set('Localidade', "");
            this.set('Telemovel', "");
            this.set('NIF', "");
            this.set('hora', "");
            this.set('Recebido_por', "");
            this.set('Análise', "");
            this.set('Orçamento', "");
            this.set('Instalação', "");
            this.set('Manutenção', "");
            this.set('Software', "");
            this.set('Hardware', "");
            this.set('Formação', "");
            this.set('descrição', "");
            this.transitionToRoute('tikets');
        },
        limpar() {
            if (this.get('Cliente') != undefined) {
                this.set('Cliente', "");
            }
            if (this.get('Solicitante') != undefined) {
                this.set('Solicitante', "");
            }
            if (this.get('Morada') != undefined) {
                this.set('Morada', "");
            }
            if (this.get('Localidade') != undefined) {
                this.set('Localidade', "");
            }
            if (this.get('Telemovel') != undefined) {
                this.set('Telemovel', "");
            }
            if (this.get('NIF') != undefined) {
                this.set('NIF', "");
            }
            if (this.get('hora') != undefined) {
                this.set('hora', "");
            }
            if (this.get('Recebido_por') != undefined) {
                this.set('Recebido_por', "");
            }

        }
    }
});