/**
 * Turn selectable on or off for an element
 *
 * @module  unselectable
 */

'use strict'

module.exports = function mapProp (obj, dict) {
	var out = {}

	for (var prop in dict) {
		if (prop in obj) {
			var result = dict[prop](obj[prop], obj)

			if (result !== undefined) out[prop] = result
		}
	}

	return out
}
