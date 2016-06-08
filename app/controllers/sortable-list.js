import Ember from 'ember';
export default Ember.Controller.extend({

    actions: {

        moveItem: function(oldIndex, newIndex) {
            Ember.assert('required `oldIndex` param is set', !Ember.isNone(oldIndex));
            Ember.assert('required `newIndex` param is set', !Ember.isNone(newIndex));

            console.debug(`oldIndex = ${oldIndex} -> newIndex = ${newIndex}`);

            let references = this.get('value'); // Your underlying array

            let movingReference = references.objectAt(oldIndex);

            references.removeAt(oldIndex, 1);
            references.insertAt(newIndex, movingReference);
        },
        removeItem: function(index) {
            Ember.assert('required `index` param is set', !Ember.isNone(index));

            let references = this.get('value');
            references.removeAt(index, 1);
        }
    }

});