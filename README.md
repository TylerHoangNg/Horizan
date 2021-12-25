<p align="center">
<a href="https://horizan-app.vercel.app/" target="_blank">
<img width="400" src="https://github.com/TylerHoangNg/Horizan/blob/main/client/public/images/Horizan-animation.svg"></a>
</p>

[![Powered By Sveltekit](https://img.shields.io/badge/powered%20by-svelte-FF3C02.svg?style=flat&logo=svelte)](https://kit.svelte.dev/) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Tailwindcss](https://img.shields.io/badge/Tailwindcss-CSS--Framework-%2338B2AC?logo=tailwindcss)](https://tailwindcss.com) [![Postcss](https://img.shields.io/badge/Postcss-style-%23DD3A0A?style=flat&logo=postcss)](https://postcss.org) [![SCSS](https://img.shields.io/badge/SCSS-Style-%23CC6699?style=flat&logo=sass)](https://sass-lang.com/) [![StorybookJS](https://img.shields.io/badge/Storybook-UI--Webcomponent--tool-%23FF4785?style=flat&logo=storybook)](https://storybook.js.org/) [![Jest](https://img.shields.io/badge/Jest-Unit--Testing--Framework-%23C21325?style=flat&logo=jest)](https://jestjs.io/) [![Prettier](https://img.shields.io/badge/Prettier-code--formatter-%23F7B93E?style=flat&logo=prettier)](https://prettier.io/) [![Eslint](https://img.shields.io/badge/Eslint-linter-%234B32C3?style=flat&logo=eslint)](https://eslint.org/) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/navneetsharmaui/sveltekit-starter/blob/main/LICENSE)

## Core Structure

    h-app
      ├── client
      │   ├── public
      │   ├── src
      │   │    ├── components
      │   │    │       ├── client
      │   │    │       ├── server
      │   │    │       ├── configs
      │   │    │       ├── library
      │   │    │       └── pages
      │   │    ├── models
      │   │    └── pages
      │   │
      │   └── proxy
      │       > webpack.configs
      │       > PORT 8080
      │
      ├── models
      │   > MongoDB Server
      │   > PORT 27017
      │
      ├── router
      │   > API
      │   > Auth
      │   > PORT 3000
      │
      └── README.md (you are here)

## Library
- Express
- Mongoose (MongoDB)
- Cors
- Body-Parser
- Morgan
``` npm install express mongoose cors body-parser morgan --save ```
- Concurrently
``` npm install -g concurrently ```
- Nodemon (dev)
``` npm install nodemon --save-dev ```
- Svelte
- webpack
``` npx degit sveltejs/template-webpack client ```
-- Install library basic from client
``` npm install ```
- MongoDB (Create value)
```
- export MONGO_URI='linkdatabase' 
- mongodb+srv://admin:<password>@cluster0.veij3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
- password: MitFnz5TdB8qTffe 
- mongoURI: process.env.MONGO_URI 
```

- Axios from client
``` npm i axios ```
## JScript
- Link api from server to client
```
    devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                },
            },
        },
```

## Local login
``` npm install passport-local-mongoose ```
``` npm install passport ```

-  Express session
``` npm install express-session ```
-  Save session from mongo
``` npm install connect-mongo ```
``` npm i connect-mongo@3 ```

### API Router
- Svelte Spa Router
``` npm install svelte-spa-router ```
