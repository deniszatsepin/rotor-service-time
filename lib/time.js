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
  this.currentTime = Date.now();
};

proto.update = function() {
  this.currentTime = Date.now();
};

TimeService._instance = null;
TimeService.getInstance = function() {
  return TimeService._instance;
};

module.exports = TimeService;
