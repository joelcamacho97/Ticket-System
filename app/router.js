import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('login');
    this.route('dashboard');
    this.route('profile');
    this.route('profile-change');
    this.route('one-step-more');
    this.route('email-change');
    this.route('password-change');
    this.route('detail-change');
    this.route('recovery-password');
    this.route('users');
    this.route('users-ability', {
        path: 'users-ability/:employers'
    });
    this.route('tikets', {
        path: 'tickets'
    });
    this.route('customers');
    this.route('add_tickets');
    this.route('sortable-list');
    this.route('profile-customers', {
        path: 'profile-customers/:customers'
    });
    this.route('customers-change', {
        path: 'customers-change/:customers'
    });
    this.route('add-customers');
    this.route('view-tickets', {
        path: 'view-tickets/:tickets'
    });

    this.route('post', function() {});
    this.route('add_tickets_rec', {
        path: 'add_tickets_rec/:id'
    });
});

export default Router;