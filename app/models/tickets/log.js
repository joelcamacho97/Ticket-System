import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
    belongsTo
} from 'ember-data/relationships';
import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('number'),
    date: DS.hasMany('person')
});