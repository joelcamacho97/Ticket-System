import Ember from 'ember';

export default Ember.Controller.extend({

    ref: Ember.inject.service('firebase'),
    erro: null,

    actions: {

        editar(Address, City, Common_Name, Company_Name, Country, Home_Email, Home_Phone, Mobile, Zip) {

            let ref = this.get('ref');
            var _this = this;

            var id = this.get('id');

            ref.once("value", function(snapshot) { // verifica se o nif esta em uso ...
                var b = snapshot.hasChild('customers/' + id);
                console.log(b);

                if (b === true || id === "" || id === undefined) {
                    _this.set('erro', "Não foi possivel adicionar esta conta porque o nif está em uso !!!");
                } else {

                    if (_this.get('Address') === undefined) {
                        Address = "nao descriminado";
                    } else {
                        Address = _this.get('Address');
                    }
                    if (_this.get('City') === undefined) {
                        City = "nao descriminado";
                    } else {
                        City = _this.get('City');
                    }
                    if (_this.get('Common_Name') === undefined) {
                        Common_Name = "nao descriminado";
                    } else {
                        Common_Name = _this.get('Common_Name');
                    }
                    if (_this.get('Company_Name') === undefined) {
                        Company_Name = "nao descriminado";
                    } else {
                        Company_Name = _this.get('Company_Name');
                    }
                    if (_this.get('Country') === undefined) {
                        Country = "nao descriminado";
                    } else {
                        Country = _this.get('Country');
                    }
                    if (_this.get('Home_Email') === undefined) {
                        Home_Email = "nao descriminado";
                    } else {
                        Home_Email = _this.get('Home_Email');
                    }
                    if (_this.get('Home_Phone') === undefined) {
                        Home_Phone = "nao descriminado";
                    } else {
                        Home_Phone = _this.get('Home_Phone');
                    }
                    if (_this.get('Mobile') === undefined) {
                        Mobile = "nao descriminado";
                    } else {
                        Mobile = _this.get('Mobile');
                    }
                    if (_this.get('Zip') === undefined) {
                        Zip = "nao descriminado";
                    } else {
                        Zip = _this.get('Zip');
                    }


                    ref.child('customers/' + id);
                    ref.child('customers/' + id + '/Address').set(Address);
                    ref.child('customers/' + id + '/City').set(City);
                    ref.child('customers/' + id + '/Common_Name').set(Common_Name);
                    ref.child('customers/' + id + '/Company_Name').set(Company_Name);
                    ref.child('customers/' + id + '/Country').set(Country);
                    ref.child('customers/' + id + '/Home_Email').set(Home_Email);
                    ref.child('customers/' + id + '/Home_Phone').set(Home_Phone);
                    ref.child('customers/' + id + '/Mobile').set(Mobile);
                    ref.child('customers/' + id + '/Zip').set(Zip);
                    _this.set(Address, null);
                    _this.set(City, null);
                    _this.set(Common_Name, null);
                    _this.set(Company_Name, null);
                    _this.set(Country, null);
                    _this.set(Home_Email, null);
                    _this.set(Home_Phone, null);
                    _this.set(Mobile, null);
                    _this.set(Zip, null);
                    _this.transitionToRoute('customers');
                }
            });

        },
        voltar() {
            console.log(this.get('id'))
            if (this.get('id') != undefined) {
                this.set(this.get('id'), "");
            }
            if (this.get('Address') != undefined) {
                this.set(this.get('Address'), "");
            }
            if (this.get('City') != undefined) {
                this.set(this.get('City'), "");
            }
            if (this.get('Common_Name') != undefined) {
                this.set(this.get('Common_Name'), "");
            }
            if (this.get('Company_Name') != undefined) {
                this.set(this.get('Company_Name'), "");
            }
            if (this.get('Country') != undefined) {
                this.set(this.get('Country'), "");
            }
            if (this.get('Home_Email') != undefined) {
                this.set(this.get('Home_Email'), "");
            }
            if (this.get('Home_Phone') != undefined) {
                this.set(this.get('Home_Phone'), "");
            }
            if (this.get('Mobile') != undefined) {
                this.set(this.get('Mobile'), "");
            }
            if (this.get('Zip') != undefined) {
                this.set(this.get('Zip'), "");
            }
            this.transitionToRoute('customers');

        }
    }
});