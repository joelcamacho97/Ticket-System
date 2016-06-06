import Ember from 'ember';

export default Ember.Controller.extend({

    sortProperties: ['id'],
    theFilter: "",

    checkFilterMatch: function(theObject, str) {
        var field, match;
        match = false;
        for (field in theObject) {
            if (theObject[field].toString().slice(0, str.length) === str) {
                match = true;
            }
        }
        return match;
    },

    filterPeople: (function() {
        return this.get("arrangedContent").filter((function(_this) {
            return function(theObject, index, enumerable) {
                if (_this.get("theFilter")) {
                    return _this.checkFilterMatch(theObject, _this.get("theFilter"));
                } else {
                    return true;
                }
            };
        })(this));
    }).property("theFilter", "sortProperties"),

    actions: {
        sortBy: function(property) {
            this.set("sortProperties", [property]);
        }
    }

});