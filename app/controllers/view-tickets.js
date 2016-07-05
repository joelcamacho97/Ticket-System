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
                tipo: this.get('model.Cliente')
            });


            Solicitante = Person.create({
                tipo: this.get('model.Solicitante')
            });

            Morada = Person.create({
                tipo: this.get('model.Morada')
            });


            Localidade = Person.create({
                tipo: this.get('model.Localidade')
            });


            Telemovel = Person.create({
                tipo: this.get('model.Telemovel')
            });


            NIF = Person.create({
                tipo: this.get('model.NIF')
            });


            dateValue = Person.create({
                tipo: this.get('model.dateValue')
            });


            hora = Person.create({
                tipo: this.get('model.hora')
            });


            Recebido_por = Person.create({
                tipo: this.get('model.Recebido_por')
            });


            descrição = Person.create({
                tipo: this.get('model.descrição')
            });


            Análise = Person.create({
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


            var nivel = '1s';
            var id = this.get('model.id');

            ref.child('tickets/nivel/' + nivel + '/' + id + '/Análise').set(Análise.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Orçamento').set(Orçamento.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Instalação').set(Instalação.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Manutenção').set(Manutenção.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Software').set(Software.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Hardware').set(Hardware.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Formação').set(Formação.get('if'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Cliente').set(Cliente.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Solicitante').set(Solicitante.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Morada').set(Morada.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Localidade').set(Localidade.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Telemovel').set(Telemovel.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/NIF').set(NIF.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/dateValue').set(dateValue.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/hora').set(hora.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/Recebido_por').set(Recebido_por.get('if2'));
            ref.child('tickets/nivel/' + nivel + '/' + id + '/descrição').set(descrição.get('if2') + ' [' + 'nome' + '] ++ Por favor escreva na linha de baixo ++\n');
            if (this.get('model.estado') === 'Escalar N2 (Pendente)') {
                ref.child('tickets/nivel/' + nivel + '/' + id + '/nivel').set(2);
            }
            ref.child('tickets/nivel/' + nivel + '/' + id + '/estado').set(this.get('model.estado'));
            //ref.child('tickets/nivel/' + nivel + '/' + id + '/logs/2').set('[nome] - Data\n[nome] - Data');


            this.store.query('tickets/nivel/1', {}).then((posts) => {

                var id = posts.compact().length + 1;
                // console.log('1')
                console.log(id)
            });

            this.set('editar', false);
        },
        cancelar() {
            this.set('editar', false);
        }

    }
});



//http://offirgolan.github.io/ember-time-machine/