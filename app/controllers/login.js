import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login: function() {
            this.get('session').open('firebase', {
                provider: 'password',
                'email': this.get('userEmail'),
                'password': this.get('userPassword')
            }).then(function() {
                console.log('TESTES   //   ' + this.get('userEmail'));
                console.log('TESTES   //   ' + this.get('session.uid'));
                // console.log('TESTES   //   ' + employers.exists());
                var ref = new Firebase("https://brainpcn.firebaseio.com/employers");
                ref.once("value", function(snapshot) {
                    var a = snapshot.exists();
                    console.log(a);
                    console.log(snapshot.child("id").exists());
                });
                //snapshot.exists();
                /*                 var user = this.store.createRecord('employer', {
                                         id: this.get('session.uid'))
                                 }); user.save()*/
             //   .then(function() {
                    this.transitionToRoute('index');
               // });


            }.bind(this));
        }
    }
});