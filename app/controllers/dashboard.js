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
            //    console.log(posts.compact().length);
            var i;
            var pendente = 0;
            var progresso = 0;
            var Resolvido = 0;

            for (i = 1; i <= posts.compact().length; i++) {
                //  console.log(i)
                var tickets = this.get('ref').child('tickets/' + i + '/estado').once('value', function(snap) {
                    //console.log(snap.val())

                    if (snap.val() === "Pendente") {

                        pendente = pendente + 1;

                        console.log(pendente)

                    } else if (snap.val() === "Resolvido") {

                        progresso = progresso + 1;

                        console.log(progresso)

                    } else if (snap.val() === 'Em Progresso') {

                        Resolvido = Resolvido + 1;

                        console.log(Resolvido)

                    }


                });


            }
        });

        /*  for (i = 0, len = cars.length, text = ""; i < len; i++) {
              text += cars[i];

              var tickets = this.get('ref').child('tickets/id/estado').once('value', function(snap) {
                  return console.log(snap.val())
              });

              tickets

          }*/

        /*  tickets.then((posts) => {

              return console.log(posts.compact());
          });*/

        /*  .once('value', function(snap) {
             console.log('accounts matching email address', snap.val())
          });*/

        //return console.log(tickets);

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