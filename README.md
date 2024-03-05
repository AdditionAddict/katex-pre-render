# Install

Assumes `npm` package manager. This is included with Node.js

```zsh
git clone path-to-repo/katex-pre-render
cd katex-pre-render
npm i
```

Following steps to recreate this repo:

# Setup

```zsh
mkdir katex-pre-render
cd katex-pre-render
npm i typescript --save-dev
npx tsc --init
```

`npx` is used to run the `tsc` command without installing it globally.

# Added `index.html` and `src/index.ts` files

_example_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pre render example</title>

    <script src="src/index.ts" type="module"></script>
  </head>
  <body>
    <p id="math-example"></p>
  </body>
</html>
```

## Add katex as a dependency

```zsh
npm i katex --save
npm i --save-dev @types/katex
```

```typescript
import katex from "katex";

const p = document.getElementById("math-example");
if (!p) throw new Error("No element with id 'math-example' found");

const html = katex.renderToString(
  "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}"
);
p.innerHTML = html;
```

# Vite - Development build tool

```zsh
npm i vite --save-dev
```

# Add scripts to `package.json`

```json
    // ...
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build"
    }
    // ...
```

Running `npm run build` will build the typescript and then run the vite build that bundles the code so it doesn't need anything from the `node_modules` folder. The final build will be in the `dist` folder.

# Run build

```zsh
npm run build
```

This will create a `dist` folder with the `index.html` and `src/index.ts` files.

You can test the build by running a local server that isn't doing any bundling. Make sure to build if making changes to the code.

```zsh
npx http-server dist
```
