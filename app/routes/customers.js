import Ember from 'ember';
import ArraySlice from 'array-slice';

export default Ember.Route.extend({

    model(tabela, array) {



        array = this.store.findAll('customers');

        tabela = ArraySlice.create({

            content: Ember.A(array),
            limit: 5,

        });

        tabela.set('content', array);
        //console.log(array); // true);
        //this.get('tabela').set('content', pesquisar);
        return tabela;
    }
});