const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {
    const allCountries = evt.detail;
    this.populate(allCountries);
  });
  this.element.addEventListener('change', (evt) => {
    console.log(evt);
  });
};

SelectView.prototype.populate = function (allCountries) {
  allCountries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
