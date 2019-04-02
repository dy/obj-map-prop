'use strict'

let map = require('./')

let assert = require('assert')

assert.deepEqual(map({
	a: '100.1',
	b: undefined,
	c: null,
	d: () => 1,
	e: 'foo',
	f: 'bar'
}, {
	a: parseFloat,
	b: x => x,
	c: x => x,
	d: f => f(),
	f: (x, state) => state.e
}), {
	a: 100.1,
	c: null,
	d: 1,
	f: 'foo'
})


assert.deepEqual(map({
	a: '100.1',
	b: undefined,
	c: null,
	d: () => 1,
	e: 'foo',
	f: 'bar'
}, {
	a: parseFloat,
	b: x => x,
	c: x => x,
	d: f => f(),
	f: (x, state) => state.e
}, true), {
	a: 100.1,
	b: undefined,
	c: null,
	d: 1,
	e: 'foo',
	f: 'foo'
})

