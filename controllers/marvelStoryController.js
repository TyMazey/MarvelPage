var marvelStoryService = require('../services/marvelStoryService');
const pry = require('pryjs');


module.exports = class marvelStoryController {
  static async show(request, response){
    var storyId = request.params.id;
    marvelStoryService.getStoryData(storyId)
    .then(async (Story) => {
      const Characters = await marvelStoryService.getCharacterData(Story.characters);
      Story.setCharacters(Characters);
      response.status(200).render('marvelStory', Story);
    }).catch(err => {
      response.status(404).render('404', {error: err});
    })
  }
}
