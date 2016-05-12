import Ember from 'ember';
//import Firebase from 'firebase';

export default Ember.Controller.extend({
    actions: {
        login: function() {
            this.get('session').open('firebase', {
                provider: 'password',
                'email': this.get('userEmail'),
                'password': this.get('userPassword')
            }).then(function() {

                var uid = this.get('session.uid');
                var ref = new Firebase("https://brainpcn.firebaseio.com/employers");
                var org = new Firebase("https://brainpcn.firebaseio.com/");
                var _this = this;

                var login = this.store.createRecord('employers', {
                    id: uid
                });

                ref.once("value", function(snapshot) {
                    var c = snapshot.child(uid).exists();
                    if (c == false) {
                        console.log(uid + '???');

                        console.log(ref + '  base de dados');
                        login.save();

                        console.log("1º opção");
                        return _this.transitionToRoute('index');

                    }

                });

                console.log("2º opção");
                this.transitionToRoute('index');

            }.bind(this));
        }

    }

});