import Ember from 'ember';
//import ArraySlice from 'array-slice';
import ArrayPager from 'array-pager';

export default Ember.Route.extend({

    model() {


        var array = this.store.findAll('customers');

        var tabela = ArrayPager.create({
            content: array,
            limit: 5
        });

        // console.log(array.toArray());
        //  i = i + 5
        // console.log(i);
        // tabela.set('offset', i);

        // console.log(this.get('model') + " ola");

        return tabela;
    }




});