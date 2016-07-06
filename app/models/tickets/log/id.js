import Model from 'ember-data/model';
import {
    belongsTo
} from 'ember-data/relationships';

export default Model.extend({
    id: ({
        name: attr('string'),
        date: attr('string')
    })

});