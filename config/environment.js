/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'brain',
        environment: environment,
        contentSecurityPolicy: {
            'default-src': "'none'",
            'img-src': "'self' data: https://secure.gravatar.com https://s3-media4.fl.yelpcdn.com/bphoto/BVZUmyvne_ouvGg7uJ09kA/o.jpg",
            'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com",
            'style-src': "'self' 'unsafe-inline'",
            'child-src': "'self' https://*.firebaseapp.com https://*.firebaseio.com",
            'script-src': "'self' 'unsafe-eval' https://apis.google.com https://*.firebaseio.com",
            'font-src': "'self' http://fonts.gstatic.com",
            'media-src': "'self'"

        },
        firebase: {
            apiKey: "AIzaSyDuF_-2TRrtGquGKYT9skUHpB0_o3Akx0E",
            authDomain: "brainpcn.firebaseapp.com",
            databaseURL: "https://brainpcn.firebaseio.com",
            storageBucket: "project-8607016508820273191.appspot.com",
        },
        torii: {
            sessionServiceName: 'session'
        },
        baseURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};