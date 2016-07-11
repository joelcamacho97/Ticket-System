import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

    Nome: attr('string'),
    Data: attr('date', {
        defaultValue: new Date
    }),
    id_do_ticket: attr('string'),
    id_utilizador: attr('string')

});