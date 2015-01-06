var chai      = require('chai');
var sinon     = require('sinon');
var sinonChai = require('sinon-chai');
var expect    = chai.expect;

chai.should();
chai.use(sinonChai);

var TimeService = require('../lib/time');

describe('TimeService tests:', function() {
  describe('TimeService', function() {
    var timeService;

    before(function() {
      timeService = new TimeService();
    });

    it('should have no currentTime property before initialization', function() {
      expect(timeService.currentTime).to.be.an('undefined');
    });

    it('should have currentTime after initialization', function() {
    	timeService.initialize();
    	expect(timeService.currentTime).to.be.an('number');
    });

    it('should change currentTime after update', function(done) {
    	var currentTime = timeService.currentTime;
    	setTimeout(function() {
    		timeService.update();
    		expect(timeService.currentTime - currentTime).to.be.above(100);
    		done();
    	}, 100);

    });
  });
});
