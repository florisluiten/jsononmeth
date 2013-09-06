if (typeof jsonmeth === "undefined") {
    jsonmeth = {};
}
/**
 * Calculates the maximum width/height that fits cosy in the mask area
 * This means that the target is clipped either horizontally or vertically
 * when drawn on screen
 *
 * @param {array} mask   The width, height of the mask
 * @param {array} target The width, height of the target
 *
 * @return {array} The calculated width, height of the target
 *
 * @author Floris Luiten <jsonmeth@florisluiten.nl>
 * @package jsOnMeth
 */
jsonmeth.maximumAspect = function (mask, target) {
    "use strict";

    var maskRatio = mask[1] / mask[0],
         targetRatio = target[1] / target[0];

    if (targetRatio < maskRatio) {
        return [Math.round(mask[0] / targetRatio * maskRatio), mask[1]];
    } else {
        return [mask[0], Math.round(mask[1] * targetRatio / maskRatio)];
    }
}
