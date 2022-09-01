# Detta är ett exempel

Det här är ett exempel på lite av den teknik vi kommer arbeta med under året.

En server-applikation som serverar HTML med innehåll hämtat från en databas.

Gör en fork av detta repo, [webb-demo](https://github.com/jensnti/webb-demo).
## Stack

Vi bygger en [monolit](https://en.wikipedia.org/wiki/Monolithic_application).

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)

## Frontend

* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [Sass](https://sass-lang.com/)

# Kommandon
Starta terminalen (ubuntu).

Byt till din code mapp och klona sedan repot och byt till repots mapp.

```bash
cd code
git clone https://github.com/jensnti/webb-demo
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

## Typografi

Jag har laddat ned Merriweather Sans från [Google fonts](https://fonts.google.com/knowledge/using_type/self_hosting_web_fonts).

Scalan för typsnitt kommer från [Utopia](https://utopia.fyi/type/calculator/).

## Dark-mode

Sidan kör en väldigt enkel implementation av darkmode. Varsegod och kolla i scss filen.
Det utgår från din setting i windows/browser.

Du kan testa att toggla den i utv.konsollen.

```js
document.documentElement.setAttribute("data-user-color-scheme", "dark");
document.documentElement.setAttribute("data-user-color-scheme", "light");
```

# Databas

Det går att köra mysql klienten från bash.
Det går även att använda en annan klient, [TablePlus](https://tableplus.com/).

Testa att koppla upp dig till klassens DB på skolans databas-server.

För att ange vilken host du ska använda skriver du ```mysql -h HOST -u X -p```

I tabellen demo, lägg till data med ditt namn.

```sql
USE te20;
INSERT INTO `demo` (`name`) VALUES ('Test');
```

# Formattering

Installera [prettier](https://prettier.io/) i vscode.
Kolla inställningar i [.prettierrc](.prettierrc).
Här finns en lista över [options](https://prettier.io/docs/en/options.html).