import Ember from 'ember';
import ArraySlice from 'array-slice';

export default Ember.Controller.extend({

    i: 0,
    ii: 1,
    load: true,
    btn: false,
    ref: Ember.inject.service('firebase'),

    actions: {

        mais: function() {

            this.store.query('customers', {}).then((posts) => {

                var a = this.incrementProperty('i') * 5;
                var b = this.incrementProperty('ii') * 5;

                console.log(a)
                console.log(b)

                if (a !== 0 && b > 5 && b !== 5) {

                    this.set('btn', true)
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
                    this.set('btn', false)
                }

                console.log(a)
                console.log(b)

                var ar = posts.slice(a, b);
                this.get('model').set('content', ar);

            });


        },

        pesquisar: function() {

            let ref = this.get('ref');
            var pesquisars = ['1', '2', '3'];

            this.get('model').set('content', pesquisars);

            console.log(this.get('model.content'))

        }
    }
});


/* mais: function(multi) {
     multi = this.incrementProperty('i') * 5;
     this.get('model').set('offset', multi);
 },
 menos: function(multi) {
     multi = this.decrementProperty('i') * 5;
     this.get('model').set('offset', multi);

     if (multi < 0) {
         this.incrementProperty('i') * 0;
         this.get('model').set('offset', multi);
     }
 },*/