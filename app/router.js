import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('dashboard');
  this.route('profile');
  this.route('profile-change');
  this.route('one-step-more');
  this.route('email-change');
  this.route('password-change');
  this.route('detail-change');
  this.route('recovery-password');
  this.route('users');
});

export default Router;