if (typeof jsonmeth === "undefined") {
    jsonmeth = {};
}
/**
 * Compares two arrays. The values are checked strict, the order needs to
 * be the same to be considered equal.
 *
 * @param {array} array1 The first array
 * @param {array} array2 The second array
 *
 * @return True if they are the same, false otherwise 
 *
 * @author Tomáš Zato
 * @author Floris Luiten <jsonmeth@florisluiten.nl>
 * @package jsOnMeth
 * @url http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript#answer-14853974
 */
jsonmeth.compareArray = function (array1, array2) {
    if (!array2) {
        return false;
    }

    if (array1.length != array2.length) {
        return false;
    }

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (!jsonmeth.compareArray(array1[i], array2[i])) {
                return false;
            }
        } else if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
