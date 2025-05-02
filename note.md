**React.js**

# What do web developers use today?

- Depending on the company and software stack used, almost every website will be paired with a javaScript library to perform more difficult tasks:
  - jQuery
  - Angular
  - Vue.js
  - React.js

# What Exactly is React?

- React is a JavaScript Library for building robust user interfaces. It does not include routing, backend work or any database it is just view layer development library.
- Declarative: You describe what the UI should look like and react will handle the how.
- Component-based: You build the UI with small reusable pieces(components). Instead of one very long file.
- You can incorporate React into any existing web application.

# Advantages:

- Virtual DOM (Fast Update): write pure JS that updates and React will update the DOM and it is very effective to update the DOM.
- Easy readability and maintainability.
- Can be used with any framework(Backbone.js, Angular.js) since it only handles the view layer.

# What is needed for React?

- All that is needed is Node.js installed
  - Because we need npm
- We create React apps using the Vite build tool which is managed by the team that build vue.js, it helps automatically generate files and directory structures.
- Example on how to create a React app.

```js
Option A: Create React App(CRA)
npx create-react-app my-app
cd my-app
npm start


Option B: Vite (faster and more modern)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

# Node.js - npm

- NPM stands for node package manager.
- It come built in when Node.js is downloaded so no need to worry about doing any extra work.
  - It is a package manager that helps with package installations and different node modules

# Getting Started - Tutorial

# 1. Start the Vite setup wizard

npm create vite@latest

# 2. Follow the prompts:

    Project name: sample-app
    Framework: React
    Variant: JavaScript

# 3. Move into the new project folder

cd sample-app

# 4. Install dependencies

npm install

# 5. Run the development server

## npm run dev

---

# The following is a one line No prompt shortcut:

    npm create vite@latest sample-app -- --template react

---

# Big Picture:

- index.html is the entry point for the browser
- main.jsx is the entry point for React
- React grabs the element with id="root" and injects your app into it

# What is going inside a React folder:

In a React app, the entry point is main.jsx, which is the first JavaScript file the browser runs (via a <script> tag in index.html). It loads React, finds the <div id="root"> in index.html, and renders the top-level <App /> component into it. The purpose of main.jsx is to boot up the app, while App.jsx is where the actual UI lives — it's the root of all components you build and display. This separation keeps the structure clean: main.jsx handles startup logic, and App.jsx manages your interface.

# Package.json files:

- package-lock,json: describes the tree from module installs. No need to worry about or touch this.This holds the exact versions of every package and sub-package, where they were downloaded from and how they depend on each other.

# Package.json:

- this is where the startup script that are run when certain commands are typed like - "start", "build", etc. The dependencies key is the actual React that is being imported.

# Public Directory:

- The public directory should contain Manifest.json,Robots.txt and index.html (this has to stay in the root dir because vite does not add it to the public. It needs it for building)
- Manifest.json: This is used for mainly progressive web apps (PWA). It contains metadata like APP name, icons, colors. If the app can be installed on a phone(like a native app).
- Example:

```js
{
  "name": "Sample App",
  "short_name": "Sample",
  "start_url": ".",
  "display": "standalone",
  "icons": [...]
}
```

- Robots.txt: Tells search engines which pages or folder to index or ignore, used in public websites not used in development.
- Example: This is usually created manually

```js
User-agent: *
Disallow: /private/
Allow: /
```

- index.html: vite keeps it out of public dir as it is needed for building in vite. Only small changes are ever made here like the title (static changes).

# Src

● App.css: is the style sheet for the App.js file, which is where the components
live (JSX code, I will explain this soon)
● Index.css: is the style sheet for the root index.html file
● Index.js(main.jsx or index.jsx): Loads the App component and places it in the “root” id (which was present in the index.html) via the ReactDOM
● App.test.js (vite does not create themby default unlike create React App (CRA)): Is a spec file used to write unit tests. It is initially loaded with a test to see if the page loads
● App.js: Is where your React Components are stored. Initially loaded with the logo and a few simple HTML tags (JSX).

# Run Your App:

- from the terminal, run ("npm run dev") which will automatically host your website on a port.
- Once the app is running you can go ahead and make your changes and it will update them live.

# Build your APP:

-
