import Ember from 'ember';
import ArraySlice from 'array-slice';

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
            var pesquisar = [1, 2, 3];
            this.get('model').clear();
            //this.get('model').set('content', pesquisar);
            //  return this.get('model');

        }
    }
});