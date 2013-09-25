if (typeof jsonmeth === "undefined") {
    jsonmeth = {};
}
if (typeof jsonmeth.global === "undefined") {
    jsonmeth.global = {};
}
/**
 * Quick unit testing
 *
 * @author Floris Luiten <jsonmeth@florisluiten.nl>
 * @package jsOnMeth
 */
jsonmeth.global.unitTest = {
    pass: {
        count: 0,
        tests: []
    },
    fail: {
        count: 0,
        tests: []
    }

};
/**
 * Allows unit tests to be executed. By providing a domain and some tests,
 * we will try to execute them and store (plus show) the results of that.
 *
 * @param {string} domain The domain (basename of the script, no extension)
 * @param {dict}   test   Any number of tests, the key is considered the 
 *                        name of the test. The function should yield
 *                        a boolean value which results to true to succeed
 *                        or false to fail the test
 *
 * @return void
 */
jsonmeth.unitTest = function (domain, tests) {
    "use strict";

    var test, passed = false;

    for (test in tests) {

        if (tests[test][0] instanceof Array && tests[test][0] instanceof Array) {
            passed = jsonmeth.compareArray(tests[test][0], tests[test][1]);
        } else if (tests[test][0] == tests[test][1]) {
            passed = true;
        }

        if (passed) {
            jsonmeth.global.unitTest.pass.count++;
            jsonmeth.global.unitTest.pass.tests.push(domain + '.' + test);
        } else {
            console.log('Failed ' + domain + '.' + test + '. Expected ', tests[test][0], ' but got ', tests[test][1]);
            jsonmeth.global.unitTest.fail.count++;
            jsonmeth.global.unitTest.fail.tests.push(domain + '.' + test);
        }
    }

    return;
}
