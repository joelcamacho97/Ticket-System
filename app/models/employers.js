import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({


    nome: attr('string'),
    Level: attr('string', {
        defaultValue: "1"
    }),
    Supervisor: attr('boolean', {
        defaultValue: false
    })
});