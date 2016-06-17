import Ember from 'ember';

export default Ember.Controller.extend({

    i: 0,
    ref: Ember.inject.service('firebase'),

    actions: {

        mais: function(multi) {
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
        },


        pesquisar: function() {

            let ref = this.get('ref');
            var _this = this;

            ref.child('customers/').orderByChild("id").equalTo('128').on("child_added", function(snapshot) {
                console.log(snapshot);

                //     _this.get('model').set('content', pesquisar);

                //     return _this.get('model');
            });


            /*  var pesquisar = this.store.find('customers', {
                  equalTo: "102823278"
              });*/

            //   console.log(pesquisar);



        }

    }

});