/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        sassOptions: {
            includePaths: ['bower_components/materialize/sass']
        },
        modulePrefix: 'brain',
        environment: environment,
        contentSecurityPolicy: {
            'default-src': "'none'",
            'img-src': "'self' https://secure.gravatar.com https://s3-media4.fl.yelpcdn.com/bphoto/BVZUmyvne_ouvGg7uJ09kA/o.jpg ",
            'script-src': "'self' 'unsafe-inline' https://cdnjs.cloudflare.com/",
            'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
            'style-src': "'self' 'unsafe-inline'",
        },
        firebase: 'https://brainpcn.firebaseio.com/',
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