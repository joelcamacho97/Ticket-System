import Ember from 'ember';

let Person = Ember.Object.extend({
    tipo: null,
    init() {
        this._super(...arguments);
    },

    if: Ember.computed('tipo', function() {


        if (`${this.get('tipo')}` === `false`) {
            return `false`;
        } else {
            return `true`;
        }

    })
});


export default Ember.Controller.extend({

    editar: false,
    ref: Ember.inject.service('firebase'),


    actions: {

        editar() {
            this.set('editar', true);

        },
        salvar(Análise, Cliente, Solicitante, Morada, Localidade, Telemovel, NIF, dateValue, hora, Recebido_por, Orçamento, Instalação, Manutenção, Software, Hardware, Formação, descrição) {

            var id = this.get('model.id');
            let ref = this.get('ref');

            /*      Cliente = Person.create({  //POR FAZER ESTA SECÇÃO
                      tipo: this.get('model.Cliente')
                  });

                  console.log(Cliente.get('if'));

                  Solicitante = Person.create({
                      tipo: this.get('model.Solicitante')
                  });

                  console.log(Solicitante.get('if'));

                  Morada = Person.create({
                      tipo: this.get('model.Morada')
                  });

                  console.log(Morada.get('if'));

                  Localidade = Person.create({
                      tipo: this.get('model.Localidade')
                  });

                  console.log(Localidade.get('if'));

                  Telemovel = Person.create({
                      tipo: this.get('model.Telemovel')
                  });

                  console.log(Telemovel.get('if'));

                  NIF = Person.create({
                      tipo: this.get('model.NIF')
                  });

                  console.log(NIF.get('if'));

                  dateValue = Person.create({
                      tipo: this.get('model.dateValue')
                  });

                  console.log(dateValue.get('if'));

                  hora = Person.create({
                      tipo: this.get('model.hora')
                  });

                  console.log(hora.get('if'));

                  Recebido_por = Person.create({
                      tipo: this.get('model.Recebido_por')
                  });

                  console.log(Recebido_por.get('if'));
                 
                  descrição = Person.create({
                   tipo: this.get('model.descrição')
               });

               console.log(descrição.get('if'));*/

            /* Análise = Person.create({  // FEITO A PARTE DA DESCRIÇÃO !!!!
                 tipo: this.get('model.Análise')
             });

             Orçamento = Person.create({
                 tipo: this.get('model.Orçamento')
             });

             Instalação = Person.create({
                 tipo: this.get('model.Instalação')
             });

             Manutenção = Person.create({
                 tipo: this.get('model.Manutenção')
             });

             Software = Person.create({
                 tipo: this.get('model.Software')
             });

             Hardware = Person.create({
                 tipo: this.get('model.Hardware')
             });

             Formação = Person.create({
                 tipo: this.get('model.Formação')
             });*/

            // console.log(Análise.get('if')); // FEITO A PARTE DA DESCRIÇÃO !!!!
            // console.log(Orçamento.get('if'));
            // console.log(Instalação.get('if'));
            // console.log(Formação.get('if'));
            // console.log(Manutenção.get('if'));
            // console.log(Software.get('if'));
            // console.log(Hardware.get('if'));

            /* ref.child('tickets/nivel/1s/' + id + '/Análise').set(Análise.get('if')); // FEITO A PARTE DA DESCRIÇÃO !!!!
             ref.child('tickets/nivel/1s/' + id + '/Orçamento').set(Orçamento.get('if'));
             ref.child('tickets/nivel/1s/' + id + '/Instalação').set(Instalação.get('if'));
             ref.child('tickets/nivel/1s/' + id + '/Manutenção').set(Manutenção.get('if'));
             ref.child('tickets/nivel/1s/' + id + '/Software').set(Software.get('if'));
             ref.child('tickets/nivel/1s/' + id + '/Hardware').set(Hardware.get('if'));
             ref.child('tickets/nivel/1s/' + id + '/Formação').set(Formação.get('if'));*/


            /*     if (this.get('Cliente') === undefined || this.get('Cliente') === "") {
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

                 ref.child('tickets/nivel/1s/' + id + '/Cliente').set(Cliente);
                 ref.child('tickets/nivel/1s/' + id + '/Solicitante').set(Solicitante);
                 ref.child('tickets/nivel/1s/' + id + '/Morada').set(Morada);
                 ref.child('tickets/nivel/1s/' + id + '/Localidade').set(Localidade);
                 ref.child('tickets/nivel/1s/' + id + '/Telemovel').set(Telemovel);
                 ref.child('tickets/nivel/1s/' + id + '/NIF').set(NIF);
                 ref.child('tickets/nivel/1s/' + id + '/dateValue').set(dateValue);
                 ref.child('tickets/nivel/1s/' + id + '/hora').set(hora);
                 ref.child('tickets/nivel/1s/' + id + '/Recebido_por').set(Recebido_por);
               
                 ref.child('tickets/nivel/1s/' + id + '/descrição').set(descrição);
                 ref.child('tickets/nivel/1s/' + id + '/nivel').set(1);
                 ref.child('tickets/nivel/1s/' + id + '/estado').set("pendente");*/

            this.set('editar', false);

        },
        cancelar() {
            this.set('editar', false);
        }

    }
});