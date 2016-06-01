import Ember from 'ember';

export default Ember.Controller.extend({

    toggleModal() {
        this.toggleProperty('isModalShown');
    }

});