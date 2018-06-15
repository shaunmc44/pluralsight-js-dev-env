var numeral = require('numeral');
var s = require('./index.css');

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
