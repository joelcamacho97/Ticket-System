import DS from 'ember-data';

export default DS.Model.extend({
    Name: DS.attr(),
    Level: DS.attr(),
    Ability: DS.attr(),
    Supervisor: DS.attr(),
});