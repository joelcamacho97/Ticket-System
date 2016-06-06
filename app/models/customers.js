import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

    Address: attr('string'),
    City: attr('string'),
    Common_Name: attr('string'),
    Company_Name: attr('string'),
    Company_Type: attr('string'),
    Country: attr('string'),
    Home_Email: attr('string'),
    Home_Phone: attr('string'),
    ID: attr('string'),
    Logo: attr('string'),
    Mobile: attr('string'),
    Other_Email: attr('string'),
    Pager_Number: attr('string'),
    Work_Email: attr('string'),
    Work_Phone: attr('string'),
    Zip: attr('string'),

});