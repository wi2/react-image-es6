var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('assert');
var ReactImg = require('./index.js').ReactImg;

if (typeof document === 'undefined') {
  var jsdom = require("node-jsdom").jsdom;
  global.document = jsdom('<!doctype html><html><body></body></html>');
  global.window = document.parentWindow;
  global.navigator = {userAgent: ''};
}


describe('The sonic component', function() {

  describe('when no props are given', function() {
    var image;

    before(function(done) {
      image = TestUtils.renderIntoDocument(
        <ReactImg src="https://avatars3.githubusercontent.com/u/1565024?v=3&s=40" />
      );
      done()
    });

    after(function(done) {
      React.unmountComponentAtNode(document.body);
      setTimeout(done);
    });

    it('should have a classname equal to "image"', function() {
      var className = TestUtils.scryRenderedDOMComponentsWithClass(image, 'image')
      assert.equal(className.length, 1);
    });


  });


});
