import Ember from 'ember';
import ArraySlice from 'array-slice';

export default Ember.Route.extend({

    model(array, tabela) {



        array = this.store.query('customers', {
            limit: 5
        });

        tabela = ArraySlice.create({
            content: array,
            limit: 5
        });

        //console.log(array); // true);

        return tabela;
    }
});