const PubSub = require('../helpers/pub_sub.js')

const DisplayView = function (element) {
  this.element = element;
};

DisplayView.prototype.bindEvents = function (){
  PubSub.subscribe('Countries:selected-country', (evt) => {
    const countryObject = evt.detail
    this.render(countryObject)
  })
}

DisplayView.prototype.render = function (countryObject) {
  this.element.innerHTML = ''

  const countryName = this.createElement('h1', countryObject.name);
  this.element.appendChild(countryName);
}

DisplayView.prototype.createElement = function(elementType, content){
  const element = document.createElement(elementType);
  element.textContent = content;
  return element;
}

module.exports = DisplayView;
