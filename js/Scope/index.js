/**
 * Created by Gerald Michael on 7/16/2016.
 */
"use strict";

//block scope variables
let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}

console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());