var expect = require('chai').expect;
var jsdom = require('jsdom');
var fs = require('fs');

describe('Our first test' , () =>{
	it('should pass', () => {
		expect (true).to.equal(true);
	});
});

describe('index.html', () => {
	it('should say Users', (done) => {
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index, function(err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Users");
			done();
			wondow.close();
		});
	});
});
