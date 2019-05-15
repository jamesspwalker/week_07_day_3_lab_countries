const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Countries = function () {
  this.countries = null;
}

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:country-choice', (evt) => {
    const countryChoice = evt.detail
    this.publishCountryDetail(countryChoice);
  })
};

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all')
  request.get((data) => {
    this.countries = data
    PubSub.publish('Countries:countries-loaded', this.countries)
  })
};

Countries.prototype.publishCountryDetail = function (countryChoice) {
  const selectedCountry = this.countries[countryChoice];
  PubSub.publish('Countries:selected-country', selectedCountry)
}


module.exports = Countries;
