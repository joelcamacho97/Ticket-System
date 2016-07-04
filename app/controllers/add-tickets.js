import Ember from 'ember';

let Person = Ember.Object.extend({
    tipo: null,

    if: Ember.computed('tipo', function() {
        if (`${this.get('tipo')}` === `undefined` || `${this.get('tipo')}` === ``) {
            return `false`
        } else {
            return `${this.get('tipo')}`;
        }
    })
});

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),
    erro: null,

    actions: {

        add(Análise, Cliente, Solicitante, Morada, Localidade, Telemovel, NIF, dateValue, hora, Recebido_por, Orçamento, Instalação, Manutenção, Software, Hardware, Formação, descrição) {

            let ref = this.get('ref');

            Cliente = Person.create({
                tipo: this.get('Cliente')
            });

            Solicitante = Person.create({
                tipo: this.get('Solicitante')
            });

            Morada = Person.create({
                tipo: this.get('Morada')
            });

            Localidade = Person.create({
                tipo: this.get('Localidade')
            });

            Telemovel = Person.create({
                tipo: this.get('Telemovel')
            });

            NIF = Person.create({
                tipo: this.get('NIF')
            });

            dateValue = Person.create({
                tipo: this.get('dateValue')
            });

            hora = Person.create({
                tipo: this.get('hora')
            });

            Recebido_por = Person.create({
                tipo: this.get('Recebido_por')
            });

            descrição = Person.create({
                tipo: this.get('descrição')
            });

            console.log(Cliente.get('if'));
            console.log(Morada.get('if'));
            console.log(Localidade.get('if'));
            console.log(Telemovel.get('if'));
            console.log(NIF.get('if'));
            console.log(dateValue.get('if'));
            console.log(hora.get('if'));
            console.log(Recebido_por.get('if'));
            console.log(descrição.get('if'));
            console.log(Solicitante.get('if'));


            console.log(this.get('erro'))

            if (Cliente.get('if') !== 'false' && Morada.get('if') !== 'false' && Localidade.get('if') !== 'false' && Telemovel.get('if') !== 'false' && NIF.get('if') !== 'false' && dateValue.get('if') !== 'false' && hora.get('if') !== 'false' && Recebido_por.get('if') !== 'false' && descrição.get('if') !== 'false' && Solicitante.get('if') !== 'false') {
                this.store.query('tickets/nivel/1', {}).then((posts) => {

                    var id = posts.compact().length + 1;

                    ref.child('tickets/nivel/1s/' + id + '/Cliente').set(Cliente.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/Solicitante').set(Solicitante.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/Morada').set(Morada.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/Localidade').set(Localidade.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/Telemovel').set(Telemovel.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/NIF').set(NIF.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/dateValue').set(dateValue.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/hora').set(hora.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/Recebido_por').set(Recebido_por.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/Análise').set(Análise);
                    ref.child('tickets/nivel/1s/' + id + '/Orçamento').set(Orçamento);
                    ref.child('tickets/nivel/1s/' + id + '/Instalação').set(Instalação);
                    ref.child('tickets/nivel/1s/' + id + '/Manutenção').set(Manutenção);
                    ref.child('tickets/nivel/1s/' + id + '/Software').set(Software);
                    ref.child('tickets/nivel/1s/' + id + '/Hardware').set(Hardware);
                    ref.child('tickets/nivel/1s/' + id + '/Formação').set(Formação);
                    ref.child('tickets/nivel/1s/' + id + '/descrição').set(descrição.get('if'));
                    ref.child('tickets/nivel/1s/' + id + '/nivel').set(1);
                    ref.child('tickets/nivel/1s/' + id + '/estado').set("pendente");
                });

                this.set('erro', false)
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

            } else {
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
                this.set('erro', true);
            }
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