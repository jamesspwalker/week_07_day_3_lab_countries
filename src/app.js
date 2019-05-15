const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js')
const Countries = require('./models/countries.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const displayView = new DisplayView();
  displayView.bindEvents();

  const selectView = new SelectView();
  selectView.bindEvents();

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

});
