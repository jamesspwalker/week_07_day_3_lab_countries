const PubSub = require('../helpers/pub_sub.js')

const SelectView = function () {

}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {

  });
};


module.exports = SelectView;
