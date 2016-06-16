import Ember from 'ember';
import ArraySlice from 'array-slice';

export default Ember.Route.extend({

    model() {

        var array = this.store.findAll('customers');

        var tabela = ArraySlice.create({
            content: array,
            limit: 5
        });

        return tabela;
    }
});