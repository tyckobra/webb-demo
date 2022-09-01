# Detta är ett exempel

Det här är ett exempel på alla delarna vi kommer att jobba med och få med under året som kommer.
Ett smakprov!

## Stack

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)

## Frontend

* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [Sass](https://sass-lang.com/)

# Kommandon
Skapa mapp och byt mapp till den (cd, change directory)
```bash
mkdir webb-demo
cd webb-demo
```
Installera paket med NPM. Vilka paket som installeras är angivet i filen [package.json](package.json).
```bash
npm install
```
För att skydda känslig data, som databas login så använder vi oss utav en fil som heter .env. Inställningarna som behövs för denna fil går att läsa utan faktiska värden i .env-example.

Vi kopierar .env-example till en ny fil, .env
```bash
cp .env-example .env
```
Innan vi kör igång servern behöver .env redigeras och databasinformation fyllas i.

Sedan kan vi starta vår utvecklingsserver med npm run dev.
```dev``` är ett script angivet i [package.json](package.json).
```bash
npm run dev
```
Surfa till [localhost:3000](http:\\localhost:3000)

# Sass

För att kompilera scss till css så finns det ytterligare ett script i package filen. Kommandot kör sass och *kollar* filen för ändringar. Så när du sparar ```sass/style.scss``` så kommer sass automatiskt skriva en ny ```public/stylesheets/style.css```.
```bash
npm run sass:watch
```
