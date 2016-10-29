System.register("text", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upper, title;
    return {
        setters:[],
        execute: function() {
            exports_1("upper", upper = function (text) {
                if (text === void 0) { text = ''; }
                return text.toUpperCase();
            });
            exports_1("title", title = function (text) {
                if (text === void 0) { text = ''; }
                return text
                    .toLowerCase()
                    .split(' ')
                    .map(function (s) { return ("" + s[0].toUpperCase() + s.slice(1)); })
                    .join(' ');
            });
        }
    }
});
System.register("nested/maths", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var add, increment;
    return {
        setters:[],
        execute: function() {
            exports_2("add", add = function (a, b) { return a + b; });
            exports_2("increment", increment = function (value, by) {
                if (by === void 0) { by = 1; }
                return value + by;
            });
        }
    }
});
System.register("onload", ["text", "nested/maths"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var text_1, maths_1;
    return {
        setters:[
            function (text_1_1) {
                text_1 = text_1_1;
            },
            function (maths_1_1) {
                maths_1 = maths_1_1;
            }],
        execute: function() {
            console.log(text_1.upper('yell a message here.'));
            console.log(text_1.title('title case message here.'));
            console.log("2 + 3 = " + maths_1.add(2, 3));
            console.log("increment 4 by 1 = " + maths_1.increment(4));
            console.log("increment 4 by 3 = " + maths_1.increment(4, 3));
        }
    }
});
System.register("bundle", ["onload"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
        }
    }
});
