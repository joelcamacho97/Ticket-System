import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
    belongsTo
} from 'ember-data/relationships';
import DS from 'ember-data';

// app/models/person.js

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    //  occupation: DS.belongsTo('occupation')
});