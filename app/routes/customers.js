import Ember from 'ember';
var startAt = 0;
var endAt = 5;

export default Ember.Route.extend({



    model(tabela, ar) {
        return this.store.query('customers', {}).then((posts) => {

            ar = posts.slice(startAt, endAt);
            return Ember.ArrayProxy.create({
                content: ar
            });

        });
    }
});


//  console.log(posts.compact().length)