const { Liquid } = require('liquidjs');

module.exports = function(source, map) {

  const options = this.getOptions() || {};
  const data = options.data || {};

  const liquidOptions = Object.assign({}, options);
  delete liquidOptions.data;
  liquidOptions.root = liquidOptions.root || this.context;

  const engine = new Liquid(liquidOptions);

  this.callback(null, engine.parseAndRenderSync(source, data), map);

};