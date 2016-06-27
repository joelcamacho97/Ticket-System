import Ember from 'ember';
import ArraySlice from 'array-slice';

export default Ember.Controller.extend({

    i: 0,
    ii: 1,
    load: true,
    btn: false,
    pes: Ember.observer('pesqui', function() {

        var get = this.get('pesqui');

        if (get !== "" && get !== undefined) {
            var pesquisar = this.store.query('customers', {
                equalTo: get // nif
            });
            this.get('model').set('content', pesquisar);
        } else {
            this.store.query('customers', {}).then((posts) => {
                posts = posts.slice(0, 5);
                this.get('model').set('content', posts);
            });
        }
    }),

    actions: {



        mais: function() {

            this.store.query('customers', {}).then((posts) => {

                var a = this.incrementProperty('i') * 5;
                var b = this.incrementProperty('ii') * 5;

                console.log(a)
                console.log(b)

                if (a !== 0 && b > 5 && b !== 5) {

                    this.set('btn', true);
                }

                var ar = posts.slice(a, b);
                this.get('model').set('content', ar);

            });
        },

        menos: function() {

            this.store.query('customers', {}).then((posts) => {

                var a = this.decrementProperty('i') * 5;
                var b = this.decrementProperty('ii') * 5;

                if (a < 0 || a === 0 && b < 5 || b === 5) {
                    a = 0;
                    b = 5;
                    this.set('btn', false);
                }

                console.log(a);
                console.log(b);

                var ar = posts.slice(a, b);
                this.get('model').set('content', ar);

            });

        },
        ver: function() {
            this.set('ver', true);
        },

        fechar: function() {
            return this.store.query('customers', {}).then((posts) => {
                posts = posts.slice(0, 5);
                this.get('model').set('content', posts);
                this.set('ver', false);
            });

        }
    }
});