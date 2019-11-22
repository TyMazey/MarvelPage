const Story = require('../models/Story');
const MarvelCharacter = require('../models/MarvelCharacter');

const fetch = require("node-fetch");
const crypto = require('crypto');
const pry = require('pryjs');

module.exports = class MarvelStoryService {

  static getStoryData(storyId){
    return new Promise(function(resolve, reject){
      fetchStoryData(storyId)
      .then(Story => {
        resolve(Story);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }

  static getCharacterData(characterList){
    return new Promise(function(resolve, reject){
      Promise.all(fetchCharacterData(characterList))
      .then(characterList => {
        resolve(characterList);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }
}

function fetchStoryData(storyId){
  return new Promise(function(resolve, reject){
    const url = setApiUrl(`https://gateway.marvel.com:443/v1/public/stories/${storyId}`);
    console.log(url);
    fetch(url)
    .then(response => {
      return response.json();
    }).then(json => {
      resolve(new Story(json));
    })
    .catch(err => {
      reject(err)
    });
  });
}

function fetchCharacterData(characterSet){
  return characterSet.map(function(character) {
    return new Promise(function(resolve, reject) {
      const url = setApiUrl(character.resourceURI);
      fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        resolve(new MarvelCharacter(json.data.results[0]));
      })
      .catch(err => {
        reject(err);
      })
    })
  })
}


function setApiUrl(baseUrl){
  const timeStamp = Date.now();
  const hashValue = setApiHash(timeStamp);
  const apiKey = `?apikey=${process.env.MARVEL_PUBLIC_KEY}`;
  const apiTimeStamp = `&ts=${timeStamp}`;
  const apiHash = `&hash=${hashValue}`;
  const fullUrl = baseUrl + apiKey + apiTimeStamp + apiHash;
  return fullUrl;
}

function setApiHash(timeStamp){
  const hashString = timeStamp + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY;
  return crypto.createHash('md5').update(hashString).digest('hex');
}



// const characterUrl = `https://gateway.marvel.com:443/v1/public/stories/23997/characters?apikey=${process.env.MARVEL_PUBLIC_KEY}&ts=${timeStamp}&hash=${hashValue}`;
