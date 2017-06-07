const nanybar = require("nanybar");

class AnybarReporter {

  onStart() {
    this.failed = false;
    nanybar('black');
  }

  finish() {
    nanybar('white');
  }

  onEnd() {
    nanybar(this.failed ? 'exclamation' : 'green');
  }

  report(prefix, data) {
    this.failed = this.failed || data.failed;
  }

}

module.exports = AnybarReporter;
