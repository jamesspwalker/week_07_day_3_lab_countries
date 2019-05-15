const PubSub = require('../helpers/pub_sub.js')

const DisplayView = function () {

}

DisplayView.prototype.bindEvents = function (){
  PubSub.subscribe('Countries:selected-country', (evt) => {
    
  })
}



module.exports = DisplayView;
