import Ember from 'ember';

export default Ember.Controller.extend({

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

    //  encontrou: null,



    actions: {

        limpar() {
            this.set('pesqui', "");
        }



    }
});