import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

    Name: attr('string'),
    Ability: attr(),
    Level: attr('string', {
        defaultValue: "1"
    }),
    Supervisor: attr('boolean', {
        defaultValue: false
    })
});