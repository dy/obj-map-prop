'use strict'

const map = require('./')

let N = 1e5
let obj = {a: 10, b: 30, c: 60, d: 80, e: 90}

console.time('obj-map-prop')
for (let i = 0; i < N; i++) {
	let res = map(obj, {
		a: a => {
			let x = 0
		    for (let i = 0; i < a; i++) {
		        x+=2
		    }
		    return x
		},
		b: a => {
			let x = 0
		    for (let i = 0; i < a; i++) {
		        x+=2
		    }
		    return x
		},
		c: a => {
			let x = 0
		    for (let i = 0; i < a; i++) {
		        x+=2
		    }
		    return x
		},
		d: a => {
			let x = 0
		    for (let i = 0; i < a; i++) {
		        x+=2
		    }
		    return x
		}
	})
}
console.timeEnd('obj-map-prop')

console.time('map function')
for (let i = 0; i < N; i++) {
	let res = map2(obj)
}
function map2 (opts) {
	let res = {}
    if (opts.a) {
	    let x = 0
	    for (let i = 0; i < opts.a; i++) {
	        x+=2
	    }
	    res.a = x
    }
    if (opts.b) {
	     let x = 0
	    for (let i = 0; i < opts.b; i++) {
	        x+=2
	    }
	    res.b = x
    }
    if (opts.c) {
     	let x = 0
	    for (let i = 0; i < opts.c; i++) {
	        x+=2
	    }
	    res.c = x
    }
    if (opts.d) {
    	let x = 0
	    for (let i = 0; i < opts.d; i++) {
	        x+=2
	    }
	    res.d = x
    }
    return res
}
console.timeEnd('map function')


console.time('direct map')
for (let i = 0; i < N; i++) {
	let res = {}
    if (obj.a) {
	    let x = 0
	    for (let i = 0; i < obj.a; i++) {
	        x+=2
	    }
	    res.a = x
    }
    if (obj.b) {
	     let x = 0
	    for (let i = 0; i < obj.b; i++) {
	        x+=2
	    }
	    res.b = x
    }
    if (obj.c) {
     	let x = 0
	    for (let i = 0; i < obj.c; i++) {
	        x+=2
	    }
	    res.c = x
    }
    if (obj.d) {
    	let x = 0
	    for (let i = 0; i < obj.d; i++) {
	        x+=2
	    }
	    res.d = x
    }
}
console.timeEnd('direct map')
