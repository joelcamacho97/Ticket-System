import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),
    erro: null,

    actions: {

        add(Análise, Cliente, Solicitante, Morada, Localidade, Telemovel, NIF, dateValue, hora, Recebido_por, Orçamento, Instalação, Manutenção, Software, Hardware, Formação, descrição) {

            let ref = this.get('ref');

            if (this.get('Cliente') === undefined || this.get('Cliente') === "") {
                Cliente = "nao descriminado";
            } else {
                Cliente = this.get('Cliente');
            }
            if (this.get('Solicitante') === undefined || this.get('Solicitante') === "") {
                Solicitante = "nao descriminado";
            } else {
                Solicitante = this.get('Solicitante');
            }
            if (this.get('Morada') === undefined || this.get('Morada') === "") {
                Morada = "nao descriminado";
            } else {
                Morada = this.get('Morada');
            }
            if (this.get('Localidade') === undefined || this.get('Localidade') === "") {
                Localidade = "nao descriminado";
            } else {
                Localidade = this.get('Localidade');
            }
            if (this.get('Telemovel') === undefined || this.get('Telemovel') === "") {
                Telemovel = "nao descriminado";
            } else {
                Telemovel = this.get('Telemovel');
            }
            if (this.get('NIF') === undefined || this.get('NIF') === "") {
                NIF = "nao descriminado";
            } else {
                NIF = this.get('NIF');
            }
            if (this.get('dateValue') === undefined || this.get('dateValue') === "") {
                dateValue = "nao descriminado";
            } else {
                dateValue = this.get('dateValue');
            }
            if (this.get('hora') === undefined || this.get('hora') === "") {
                hora = "nao descriminado";
            } else {
                hora = this.get('hora');
            }
            if (this.get('Recebido_por') === undefined || this.get('Recebido_por') === "") {
                Recebido_por = "nao descriminado";
            } else {
                Recebido_por = this.get('Recebido_por');
            }
            if (this.get('Telemovel') === undefined || this.get('Telemovel') === "") {
                Telemovel = "nao descriminado";
            } else {
                Telemovel = this.get('Telemovel');
            }
            if (this.get('Orçamento') === undefined || this.get('Orçamento') === "") {
                Orçamento = "nao descriminado";
            } else {
                Orçamento = this.get('Orçamento');
            }
            if (this.get('Instalação') === undefined || this.get('Instalação') === "") {
                Instalação = "nao descriminado";
            } else {
                Instalação = this.get('Instalação');
            }
            if (this.get('Manutenção') === undefined || this.get('Manutenção') === "") {
                Manutenção = "nao descriminado";
            } else {
                Manutenção = this.get('Manutenção');
            }
            if (this.get('Software') === undefined || this.get('Software') === "") {
                Software = "nao descriminado";
            } else {
                Software = this.get('Software');
            }
            if (this.get('Hardware') === undefined || this.get('Hardware') === "") {
                Hardware = "nao descriminado";
            } else {
                Hardware = this.get('Hardware');
            }
            if (this.get('Formação') === undefined || this.get('Formação') === "") {
                Formação = "nao descriminado";
            } else {
                Formação = this.get('Formação');
            }
            if (this.get('descrição') === undefined || this.get('descrição') === "") {
                descrição = "nao descriminado";
            } else {
                descrição = this.get('descrição');
            }
            if (this.get('Análise') === undefined || this.get('Análise') === "") {
                Análise = "nao descriminado";
            } else {
                Análise = this.get('Análise');
            }

            this.store.query('tickets', {}).then((posts) => {

                var id = posts.compact().length + 1;


                ref.child('tickets/' + id + '/Cliente').set(Cliente);
                ref.child('tickets/' + id + '/Solicitante').set(Solicitante);
                ref.child('tickets/' + id + '/Morada').set(Morada);
                ref.child('tickets/' + id + '/Localidade').set(Localidade);
                ref.child('tickets/' + id + '/Telemovel').set(Telemovel);
                ref.child('tickets/' + id + '/NIF').set(NIF);
                ref.child('tickets/' + id + '/dateValue').set(dateValue);
                ref.child('tickets/' + id + '/hora').set(hora);
                ref.child('tickets/' + id + '/Recebido_por').set(Recebido_por);
                ref.child('tickets/' + id + '/Análise').set(Análise);
                ref.child('tickets/' + id + '/Orçamento').set(Orçamento);
                ref.child('tickets/' + id + '/Instalação').set(Instalação);
                ref.child('tickets/' + id + '/Manutenção').set(Manutenção);
                ref.child('tickets/' + id + '/Software').set(Software);
                ref.child('tickets/' + id + '/Hardware').set(Hardware);
                ref.child('tickets/' + id + '/Formação').set(Formação);
                ref.child('tickets/' + id + '/descrição').set(descrição);
                ref.child('tickets/' + id + '/nivel').set(1);


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
            // this.transitionToRoute('tickets');

        }
    }
});