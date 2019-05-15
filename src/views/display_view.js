const PubSub = require('../helpers/pub_sub.js')

const DisplayView = function (element) {
  this.element = element;
};

DisplayView.prototype.bindEvents = function (){
  PubSub.subscribe('Countries:selected-country', (evt) => {
    const countryObject = evt.detail
    console.log(countryObject);
    this.render(countryObject)
  })
}

DisplayView.prototype.render = function (countryObject) {
  this.element.innerHTML = ''

  const countryName = this.createElement('h1', countryObject.name);
  this.element.appendChild(countryName);

  const flagImage = new Image(200, 100)
  flagImage.src = countryObject.flag;
  this.element.appendChild(flagImage);

  const regionLabel = document.createElement('h2')
  regionLabel.textContent = "Region:"
  this.element.appendChild(regionLabel);

  const countryRegion = this.createElement('h3', countryObject.region);
  this.element.appendChild(countryRegion);

  const languageLabel = document.createElement('h2')
  languageLabel.textContent = "Languages:"
  this.element.appendChild(languageLabel);


  const countryLanguages = countryObject.languages
  const countryList = this.createListItem(countryLanguages);
  this.element.appendChild(countryList);

}

DisplayView.prototype.createElement = function(elementType, content){
  const element = document.createElement(elementType);
  element.textContent = content;
  return element;
}

DisplayView.prototype.createListItem = function(countryLanguages){
  const countryLanguageList = document.createElement('ul')

  const countryList = countryLanguages.forEach((language) => {
    const listItem = document.createElement('li')
    listItem.textContent = language.name
    countryLanguageList.appendChild(listItem);

  })
  return countryLanguageList;
}



module.exports = DisplayView;
