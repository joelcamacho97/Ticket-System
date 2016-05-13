import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        salvar: function() {

            var uid = this.get('session.uid');


            console.log(uid);

            var login = this.store.createRecord('employers', {
                'id': this.get('session.uid'),
                 Name: this.get('userName')
            });

            login.save();

        }
    }




});