import Ember from 'ember';

export default Ember.Controller.extend({

    i: 0,

    actions: {

        mais: function(multi) {

            multi = this.incrementProperty('i') * 5;

            console.log(multi);

            this.get('model').set('offset', multi);
        },
        menos: function(multi) {

            multi = this.decrementProperty('i') * 5;
            this.get('model').set('offset', multi);

            if (multi < 0) {
                this.incrementProperty('i') * 0;
                this.get('model').set('offset', multi);
            }

        }

    }

});