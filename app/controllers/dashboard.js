import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),

    init: function() {
        this._super();
        this.set('nome', "null");

        /* var tickets = this.store.query('ticket', {
             startAt: "estado",
             endAt: "estado"
         });*/

        var id = this.store.query('ticket', {}).then((posts) => {
            console.log(posts.compact().length);
            var i;
            var volume = posts.compact().length;
            var pendente = 0;
            var progresso = 0;
            var Resolvido = 0;
            var pendente2 = 0;
            var progresso2 = 0;
            var Resolvido2 = 0;
            var escalar = 0;
            var _this = this;

            for (i = 1; i <= volume; i++) {
                //  console.log(i)
                var tickets = this.get('ref').child('tickets/' + i + '/estado').once('value', function(snap) {
                    //console.log(snap.val())

                    _this.get('ref').child('tickets/' + i + '/nivel').once('value', function(nivel) {

                        if (nivel.val() === null) {
                            volume = volume + 1
                        } else {
                            //   console.log(progresso)

                            //       console.log('id:' + i + ' e nivel é o ' + nivel.val())

                            if (snap.val() === "Pendente" && nivel.val() === 1) {
                                pendente = pendente + 1;
                                //  console.log('pendente:' + pendente)
                            }
                            if (snap.val() === "Pendente" && nivel.val() === 2) {
                                pendente2 = pendente2 + 1;
                                //      console.log('pendente:' + pendente2)
                            } else if (snap.val() === "Resolvido" && nivel.val() === 1) {
                                progresso = progresso + 1;
                                //     console.log('progresso:' + progresso)
                            } else if (snap.val() === "Resolvido" && nivel.val() === 2) {
                                progresso2 = progresso2 + 1;
                                //     console.log('progresso:' + progresso2)
                            } else if (snap.val() === 'Em Progresso' && nivel.val() === 1) {
                                Resolvido = Resolvido + 1;
                                //     console.log('Resolvido:' + Resolvido)
                            } else if (snap.val() === 'Em Progresso' && nivel.val() === 2) {
                                Resolvido2 = Resolvido2 + 1;
                                //    console.log('Resolvido:' + Resolvido2)
                            } else if (snap.val() === 'Escalar N2 (Pendente)' && nivel.val() === 2) {
                                escalar = escalar + 1;
                                //    console.log('Resolvido:' + Resolvido2)
                            }
                        }
                    });
                });
            }
            _this.set('pendente1', pendente);
            _this.set('pendente2', pendente2);
            _this.set('progresso1', progresso);
            _this.set('progresso2', progresso2);
            _this.set('Resolvido1', Resolvido);
            _this.set('Resolvido2', Resolvido2);
            _this.set('escalar', escalar);
        });

    },

    pes: Ember.observer('pesqui', function() { //pes é o nome dado a pesquisa na pagina dashboard

        var get = this.get('pesqui'); // dados de pesquisa

        if (get !== "" && get !== undefined) { //verifica se esta algo escrito no input caso sim segue em frente ...
            var pesquisar = this.store.query('customers', {
                equalTo: get
            });
            pesquisar.then((posts) => {
                console.log(posts.compact().length);

                if (posts.compact().length === 0) {
                    this.get('model').set('content', null);
                    this.set('encontrou', false);
                } else {
                    this.get('model').set('content', pesquisar);
                    this.set('encontrou', true);
                }
            });

        } else { // caso contrario retorna 'null'
            this.get('model').set('content', "");
            this.set('encontrou', false);
        }
    }),

    actions: {


        limpar() {
            this.set('pesqui', "");
        }



    }
});