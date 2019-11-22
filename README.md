# MarvelPage

### Description
Simple web-app built in NodeJS using Express to serve static views for Marvel stories.
Information generated from Marvel Developer Api at [developer.marvel.com](https://developer.marvel.com).


### Using The App
You can visit the index at '/' to see a brief description or click on any of the three links provided to be brought to a marvel-story.
If you know the 'id' of a marvel story youd like to see visit '/marve-story/:id' where ':id' is the id of the Marvel-Story.

### Setup Locally
Clone the repo to your local machine.
In terminal navigate to the root directory of the repository.
1. Run
```
npm install
```
2. Run
```
touch .env
```
4. copy this into your .env
```
MARVEL_PUBLIC_KEY=1234
MARVEL_PRIVATE_KEY=abcd
```
You will need to replace these keys with your own Marvel Api developer keys to run the application locally.
If you do not have keys visit [developer.marvel.com](https://developer.marvel.com) to create an account.

5. Spin up a local server by running
```
npm start
```
6. Open your browser and visit 'localhost:3000' and enjoy!

### Authors
- Ty Mazey [Github Profile](https://github.com/tymazey)
