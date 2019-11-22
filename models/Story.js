class Story{
  constructor  (input){
    this.title = input.data.results[0].title,
    this.description = input.data.results[0].description,
    this.characters = input.data.results[0].characters.items,
    this.attributionText = input.attributionText
  }

  setCharacters(characters){
    this.characters = characters;
  }
}

module.exports = Story;
