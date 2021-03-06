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
 *                        A third item in the array may exists to specify
 *                        additional circumstances. For now, only 'inverse'
 *                        is an option which inverses the check (true will 
 *                        become false and vica versa)
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
        passed = false;

        if (tests[test][0] instanceof Array && tests[test][0] instanceof Array) {
            passed = jsonmeth.compareArray(tests[test][0], tests[test][1]);
        } else if (tests[test][0] === tests[test][1]) {
            passed = true;
        }

        if (tests[test][2] === 'inverse') {
            passed = !passed;
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
