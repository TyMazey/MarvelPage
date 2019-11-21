class MarvelCharacter {
  constructor  (data){
    this.name = data.name,
    this.thumbnail = data.thumbnail.path + '.' + data.thumbnail.extension,
    this.wikiLink = data.urls[1].url
  }
}

module.exports = MarvelCharacter;
