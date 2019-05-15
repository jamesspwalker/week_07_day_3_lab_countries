const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js')
const Countries = require('./models/countries.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const showCountryDetails = document.querySelector('div#country');
  const displayView = new DisplayView(showCountryDetails);
  displayView.bindEvents();

  const dropDownMenu = document.querySelector('select#countries');
  const selectView = new SelectView(dropDownMenu);
  selectView.bindEvents();

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

});
