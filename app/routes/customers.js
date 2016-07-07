import Ember from 'ember';

export default Ember.Route.extend({



    model(tabela, ar, qry) {

        var startAt = 0;
        var endAt = 5;

        return this.store.query('customers', {}).then((posts) => {

            ar = posts.slice(startAt, endAt);
            return Ember.ArrayProxy.create({
                content: ar
            });
        });

    }
});


//  console.log(posts.compact().length)