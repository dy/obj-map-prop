/**
 * Turn selectable on or off for an element
 *
 * @module  unselectable
 */

'use strict'

module.exports = function mapProp (obj, dict, rest) {
	var out = {}

  if (rest) {
    for (var prop in obj) {
      out[prop] = obj[prop]
    }
  }

	for (var prop in dict) {
		if (prop in obj) {
			var result = dict[prop](obj[prop], obj)

			if (result !== undefined) out[prop] = result
		}
	}

	return out
}
