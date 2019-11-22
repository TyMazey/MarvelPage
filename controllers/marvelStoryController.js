var marvelStoryService = require('../services/marvelStoryService');
const pry = require('pryjs');


module.exports = class marvelStoryController {
  static async show(request, response){
    const Story = await marvelStoryService.getStoryData();
    const Characters = await marvelStoryService.getCharacterData(Story.characters);
    Story.setCharacters(Characters);
    response.status(200).render('marvelStory', Story);
  }
}
