# How to use this repo

## States

If you're reading this, some of these prototypes use XState, which is a package that helps manage logic
in a sort of visual flow chart and state as encapsulated blocks of code.
If you're using Visual Studio Code, you will want to install the Xstate add on to view and edit these states visually

---

# Proto - Boilerplate

## Scripts

### `npm i`

Install dependencies:

### `npm start`

Access via [http://localhost:3000](http://localhost:3000)

### `npm run build`

Build all prototypes into dist folder

To build specific prototypes into a dist folder use:

`npm run build [proto number]`

Example to build protos 01 13, 31 and 50 just use spaces:

`npm run build 13 31 50`

### `npm run index`

Generate the index.html with a list of links for each prototype.

### updating dependencies

```
npx npm-check-updates -u
```

### Common assets

Create an `assets` folder inside `src` so you can use common assets across different prototypes.

### Common shortcuts

When inside a prototype page in your browser, you can use the following shortcuts:

- `Backspace` to navigate to index page.

### Deploy on GitHub

Use the docs folder of the `main` branch.

Change on your Github Project settings page https://github.com/[username]/[project-name]/settings , go to GitHub Pages section, select main branch and then `docs` folder.

---

This project uses [Prettier](https://prettier.io/) to format the code.
