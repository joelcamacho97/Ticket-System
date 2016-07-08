import Ember from 'ember';

let Person = Ember.Object.extend({
    tipo: null,

    if: Ember.computed('tipo', function() {
        if (`${this.get('tipo')}` === `undefined` || `${this.get('tipo')}` === ``) {
            return `false`
        } else {
            return `${this.get('tipo')}`;
        }
    }),
    if2: Ember.computed('tipo', function() {
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

        add(Analise, Cliente, Solicitante, Morada, Localidade, Telemovel, NIF, dateValue, hora, Recebido_por, Orçamento, Instalação, Manutenção, Software, Hardware, Formação, descrição) {

            let ref = this.get('ref');

            Cliente = Person.create({
                tipo: this.get('model.Company_Name')
            });

            Solicitante = Person.create({
                tipo: this.get('Solicitante')
            });

            Morada = Person.create({
                tipo: this.get('model.Address')
            });

            Localidade = Person.create({
                tipo: this.get('Localidade')
            });

            Telemovel = Person.create({
                tipo: this.get('model.Mobile')
            });

            NIF = Person.create({
                tipo: this.get('model.id')
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

            Analise = Person.create({
                tipo: this.get('Análise')
            });
            Orçamento = Person.create({
                tipo: this.get('Orçamento')
            });
            Instalação = Person.create({
                tipo: this.get('Instalação')
            });
            Manutenção = Person.create({
                tipo: this.get('Manutenção')
            });
            Software = Person.create({
                tipo: this.get('Software')
            });
            Hardware = Person.create({
                tipo: this.get('Hardware')
            });
            Formação = Person.create({
                tipo: this.get('Formação')
            });

            if (Cliente.get('if') !== 'false' && Morada.get('if') !== 'false' && Localidade.get('if') !== 'false' && Telemovel.get('if') !== 'false' && NIF.get('if') !== 'false' && dateValue.get('if') !== 'false' && hora.get('if') !== 'false' && Recebido_por.get('if') !== 'false' && descrição.get('if') !== 'false' && Solicitante.get('if') !== 'false') {
                this.store.query('ticket', {}).then((posts) => {

                    var id = posts.compact().length + 1;
                    var estado = "Pendente";

                    ref.child('tickets/' + id + '/Cliente').set(Cliente.get('if'));
                    ref.child('tickets/' + id + '/Solicitante').set(Solicitante.get('if'));
                    ref.child('tickets/' + id + '/Morada').set(Morada.get('if'));
                    ref.child('tickets/' + id + '/Localidade').set(Localidade.get('if'));
                    ref.child('tickets/' + id + '/Telemovel').set(Telemovel.get('if'));
                    ref.child('tickets/' + id + '/NIF').set(NIF.get('if'));
                    ref.child('tickets/' + id + '/dateValue').set(dateValue.get('if'));
                    ref.child('tickets/' + id + '/hora').set(hora.get('if'));
                    ref.child('tickets/' + id + '/Recebido_por').set(Recebido_por.get('if'));
                    ref.child('tickets/' + id + '/Análise').set(Analise.get('if2'));
                    ref.child('tickets/' + id + '/Orçamento').set(Orçamento.get('if2'));
                    ref.child('tickets/' + id + '/Instalação').set(Instalação.get('if2'));
                    ref.child('tickets/' + id + '/Manutenção').set(Manutenção.get('if2'));
                    ref.child('tickets/' + id + '/Software').set(Software.get('if2'));
                    ref.child('tickets/' + id + '/Hardware').set(Hardware.get('if2'));
                    ref.child('tickets/' + id + '/Formação').set(Formação.get('if2'));
                    ref.child('tickets/' + id + '/descrição').set(descrição.get('if'));
                    ref.child('tickets/' + id + '/nivel').set(1);
                    ref.child('tickets/' + id + '/estado').set(estado);
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