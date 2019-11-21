var marvelStoryService = require('../services/marvelStoryService');
const pry = require('pryjs');


module.exports = class marvelStoryController {
  static show(request, response){
    marvelStoryService.getStoryData()
    .then(body => {
      response.status(200).render('marvelStory', body);
    }).catch(err => {
      response.status(500).render('error', err);
    })
  }
}
