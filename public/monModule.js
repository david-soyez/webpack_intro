function monModule() {
module.hot.accept();
  this.bonjour = function() {
    return 'bonjour!';
  }

  this.auRevoir = function() {
    return 'au revoir!';
  }
}

module.exports = monModule;
