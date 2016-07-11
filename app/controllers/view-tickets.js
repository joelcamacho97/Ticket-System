import Ember from 'ember';

let Person = Ember.Object.extend({
    tipo: null,

    if: Ember.computed('tipo', function() {


        if (`${this.get('tipo')}` === `false`) {
            return `false`;
        } else {
            return `true`;
        }

    }),

    if2: Ember.computed('tipo', function() {


        if (`${this.get('tipo')}` === `` || `${this.get('tipo')}` === `undefined`) {
            return `Nada encontrado`;
        } else {
            return `${this.get('tipo')}`;
        }

    }),

});


export default Ember.Controller.extend({

    editar: false,
    ref: Ember.inject.service('firebase'),
    organismContent: [{
        value: '1',
        display_name: 'Pendente'
    }, {
        value: '2',
        display_name: 'Em progresso'
    }, {
        value: '3',
        display_name: 'Escalar n2'
    }, {
        value: '4',
        display_name: 'Resolvido'
    }, ],

    actions: {

        editar() {
            this.set('editar', true);

        },
        salvar(Análise, Cliente, Solicitante, Morada, Localidade, Telemovel, NIF, dateValue, hora, Recebido_por, Orçamento, Instalação, Manutenção, Software, Hardware, Formação, descrição) {

            let ref = this.get('ref');

            Cliente = Person.create({
                tipo: this.get('model1.Cliente')
            });


            Solicitante = Person.create({
                tipo: this.get('model1.Solicitante')
            });

            Morada = Person.create({
                tipo: this.get('model1.Morada')
            });


            Localidade = Person.create({
                tipo: this.get('model1.Localidade')
            });


            Telemovel = Person.create({
                tipo: this.get('model1.Telemovel')
            });


            NIF = Person.create({
                tipo: this.get('model1.NIF')
            });


            dateValue = Person.create({
                tipo: this.get('model1.dateValue')
            });


            hora = Person.create({
                tipo: this.get('model1.hora')
            });


            Recebido_por = Person.create({
                tipo: this.get('model1.Recebido_por')
            });


            descrição = Person.create({
                tipo: this.get('model1.descrição')
            });


            Análise = Person.create({
                tipo: this.get('model1.Análise')
            });

            Orçamento = Person.create({
                tipo: this.get('model1.Orçamento')
            });

            Instalação = Person.create({
                tipo: this.get('model1.Instalação')
            });

            Manutenção = Person.create({
                tipo: this.get('model1.Manutenção')
            });

            Software = Person.create({
                tipo: this.get('model1.Software')
            });

            Hardware = Person.create({
                tipo: this.get('model1.Hardware')
            });

            Formação = Person.create({
                tipo: this.get('model1.Formação')
            });

            //console.log(this.get('organismContent').value)

            /* console.log(Análise.get('if'));
               console.log(Orçamento.get('if'));
               console.log(Instalação.get('if'));
               console.log(Formação.get('if'));
               console.log(Manutenção.get('if'));
               console.log(Software.get('if'));
               console.log(Hardware.get('if'));
               console.log(Solicitante.get('if2'));
               console.log(Cliente.get('if2'));
               console.log(Morada.get('if2'));
               console.log(Localidade.get('if2'));
               console.log(Telemovel.get('if2'));
               console.log(NIF.get('if2'));
               console.log(dateValue.get('if2'));
               console.log(hora.get('if2'));
               console.log(Recebido_por.get('if2'));
               console.log(descrição.get('if2'));*/

            var id = this.get('model1.id');

            console.log(this.get('model2.Name'))

            var nome = this.get('model2.Name');

            var _this = this;

            ref.child('tickets/' + id + '/Análise').set(Análise.get('if'));
            ref.child('tickets/' + id + '/Orçamento').set(Orçamento.get('if'));
            ref.child('tickets/' + id + '/Instalação').set(Instalação.get('if'));
            ref.child('tickets/' + id + '/Manutenção').set(Manutenção.get('if'));
            ref.child('tickets/' + id + '/Software').set(Software.get('if'));
            ref.child('tickets/' + id + '/Hardware').set(Hardware.get('if'));
            ref.child('tickets/' + id + '/Formação').set(Formação.get('if'));
            ref.child('tickets/' + id + '/Cliente').set(Cliente.get('if2'));
            ref.child('tickets/' + id + '/Solicitante').set(Solicitante.get('if2'));
            ref.child('tickets/' + id + '/Morada').set(Morada.get('if2'));
            ref.child('tickets/' + id + '/Localidade').set(Localidade.get('if2'));
            ref.child('tickets/' + id + '/Telemovel').set(Telemovel.get('if2'));
            ref.child('tickets/' + id + '/NIF').set(NIF.get('if2'));
            ref.child('tickets/' + id + '/dateValue').set(dateValue.get('if2'));
            ref.child('tickets/' + id + '/hora').set(hora.get('if2'));
            ref.child('tickets/' + id + '/Recebido_por').set(Recebido_por.get('if2'));
            ref.child('tickets/' + id + '/descrição').set(descrição.get('if2') + '[' + nome + ']\n');
            if (this.get('model1.estado') === 'Escalar N2 (Pendente)') {
                ref.child('tickets/' + id + '/nivel').set(2);
            }
            ref.child('tickets/' + id + '/estado').set(this.get('model1.estado'));

            ref.child('logs/tickets/').once("value", function(snapshot) {
                var cont = snapshot.numChildren() + 1;
                ref.child('logs/tickets/' + cont + '/id_do_ticket').set(id);
                ref.child('logs/tickets/' + cont + '/Nome').set(nome);
                ref.child('logs/tickets/' + cont + '/Data').set(Date("YYYY-MM-DDTHH:MM:SS").toString());
                ref.child('logs/tickets/' + cont + '/id_utilizador').set(_this.get('model2.id'));
            });

            this.set('editar', false);
        },
        cancelar() {
            this.set('editar', false);
        }
    }
});



//http://offirgolan.github.io/ember-time-machine/