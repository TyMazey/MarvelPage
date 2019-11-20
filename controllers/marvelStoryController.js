var marvelStoryService = require('../services/marvelStoryService');

module.exports = class marvelStoryController {
  static show(request, response){
    response.setHeader('Content-Type', 'text/html')
    var body = marvelStoryService.getStory();
    response.status(200).render('marvelStory', body);
  }
}
