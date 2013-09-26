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
    pass: [],
    fail: [],
    domain: [],
    time: {
        start: null,
        end: null
    }
};
/**
 * Allows unit tests to be executed. By providing a domain and some tests,
 * we will try to execute them and store (plus show) the results of that.
 *
 * @param {string} domain The domain (basename of the script)
 * @param {dict}   test   Any number of tests. The key is the name of the 
 *                        test. The value should be a 2-indexed array
 *                        with two comparable objects (integer, boolean,
 *                        array). If the values match, the test is
 *                        considered passed, otherwise it failes. The
 *                        testing is done strict (===).
 *
 * @return void
 */
jsonmeth.unitTest = function (domain, tests) {
    "use strict";

    var test, passed = false;

    if (jsonmeth.global.unitTest.time.start === null) {
        jsonmeth.global.unitTest.time.start = new Date().getTime();
    }

    for (test in tests) {
        if (tests[test][0] instanceof Array && tests[test][0] instanceof Array) {
            passed = jsonmeth.compareArray(tests[test][0], tests[test][1]);
        } else if (tests[test][0] === tests[test][1]) {
            passed = true;
        }

        if (passed) {
            jsonmeth.global.unitTest.pass.push([domain + '.' + test, tests[test][0], tests[test][1]]);
        } else {
            console.log('Failed ' + domain + '.' + test + '. Expected ', tests[test][0], ' but got ', tests[test][1]);
            jsonmeth.global.unitTest.fail.push([domain + '.' + test, tests[test][0], tests[test][1]]);
        }
    }

    jsonmeth.global.unitTest.domain.push(domain);
    jsonmeth.global.unitTest.time.end = (new Date().getTime() - jsonmeth.global.unitTest.time.start);

    return;
}
