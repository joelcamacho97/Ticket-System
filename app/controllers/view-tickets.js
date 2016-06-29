import Ember from 'ember';

export default Ember.Controller.extend({

    editar: false,

    actions: {

        editar() {
            this.set('editar', true);
        },
        salvar() {

            var id = this.get('model.id');

            if (this.get('Cliente') === undefined || this.get('Cliente') === "") {
                return Cliente = "N/A";
            } else {
                Cliente = this.get('Cliente');
            }
            if (this.get('Solicitante') === undefined || this.get('Solicitante') === "") {
                return Solicitante = "N/A";
            } else {
                Solicitante = this.get('Solicitante');
            }
            if (this.get('Morada') === undefined || this.get('Morada') === "") {
                return Morada = "N/A";
            } else {
                Morada = this.get('Morada');
            }
            if (this.get('Localidade') === undefined || this.get('Localidade') === "") {
                return Localidade = "N/A";
            } else {
                Localidade = this.get('Localidade');
            }
            if (this.get('Telemovel') === undefined || this.get('Telemovel') === "") {
                return Telemovel = "N/A";
            } else {
                Telemovel = this.get('Telemovel');
            }
            if (this.get('NIF') === undefined || this.get('NIF') === "") {
                return NIF = "N/A";
            } else {
                NIF = this.get('NIF');
            }
            if (this.get('dateValue') === undefined || this.get('dateValue') === "") {
                return dateValue = "N/A";
            } else {
                dateValue = this.get('dateValue');
            }
            if (this.get('hora') === undefined || this.get('hora') === "") {
                return hora = "N/A";
            } else {
                hora = this.get('hora');
            }
            if (this.get('Recebido_por') === undefined || this.get('Recebido_por') === "") {
                return Recebido_por = "N/A";
            } else {
                Recebido_por = this.get('Recebido_por');
            }
            if (this.get('Telemovel') === undefined || this.get('Telemovel') === "") {
                return Telemovel = "N/A";
            } else {
                Telemovel = this.get('Telemovel');
            }
            if (this.get('Orçamento') === undefined || this.get('Orçamento') === "") {
                return Orçamento = "Não";
            } else {
                Orçamento = "Sim";
            }
            if (this.get('Instalação') === undefined || this.get('Instalação') === "") {
                return Instalação = "Não";
            } else {
                Instalação = "Sim";
            }
            if (this.get('Manutenção') === undefined || this.get('Manutenção') === "") {
                return Manutenção = "Não";
            } else {
                Manutenção = "Sim";
            }
            if (this.get('Software') === undefined || this.get('Software') === "") {
                return Software = "Não";
            } else {
                Software = "Sim";
            }
            if (this.get('Hardware') === undefined || this.get('Hardware') === "") {
                return Hardware = "Não";
            } else {
                Hardware = "Sim";
            }
            if (this.get('Formação') === undefined || this.get('Formação') === "") {
                return Formação = "Não";
            } else {
                Formação = "Sim";
            }
            if (this.get('descrição') === undefined || this.get('descrição') === "") {
                return descrição = "Sim";
            } else {
                descrição = this.get('descrição');
            }
            if (this.get('Análise') === undefined || this.get('Análise') === "") {
                return Análise = "Não";
            } else {
                Análise = "Sim";
            }

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

            this.set('editar', false);

        },
        cancelar() {
            this.set('editar', false);
        }

    }
});