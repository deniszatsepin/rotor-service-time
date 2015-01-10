var now = require('performance-now');
/**
 * Time service for the RotorWeb engine.
 * @param {object} param
 * @constructor
 */
function TimeService(param) {
  if (TimeService._instance === null) {
    TimeService._instance = this;
  } else {
    return TimeService._instance;
  }
}

var proto = TimeService.prototype;

proto.initialize = function() {
  this.prevTime = now();
};

proto.update = function() {
  this.currentTime = now();
  this.delta = this.currentTime - this.prevTime;
  this.prevTime = this.currentTime;
};

TimeService._instance = null;
TimeService.getInstance = function() {
  return TimeService._instance;
};

module.exports = TimeService;
