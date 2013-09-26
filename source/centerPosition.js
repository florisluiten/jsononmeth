if (typeof jsonmeth === "undefined") {
    jsonmeth = {};
}
/**
 * Calculates the offset of the target if it should be centered positioned
 * within the canvas.
 * When the target is smaller than the canvas it will return positive
 * value(s). If the target is bigger it will return negative value(s)
 *
 * @param {array} canvas The width, height of the canvas
 * @param {array} target The width, height of the target
 *
 * @return {array} The calculated left offset, top offset
 *
 * @author Floris Luiten <jsonmeth@florisluiten.nl>
 * @package jsOnMeth
 */
jsonmeth.centerPosition = function (canvas, target) {
    "use strict";

    return [
        0 - (target[0] - canvas[0]) / 2,
        0 - (target[1] - canvas[1]) / 2
    ];
}
