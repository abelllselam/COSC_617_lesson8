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

- Meta does something cool for you call build where there compress everything and put everything together. The way we develop is good for developing but having a lot of pages scattered is not the best for running apps for the world therefore we have the command (npm run build) where it automatically creates a build folder to be put on a webserver.

# Serve:

- Ones the build folder has been created you can serve the build (Which means deploy with static server)(Serve also mean the action of sending files from server to client).
- To serve you need to install serve first:

  - npm install serve
  - Then, serve -s build
  - The main difference between this and npm start is that this is shared across your network for people to view.
  - Example of running the serve:

  ```js
  npm install -g serve
  serve -s build

  -s stands for "single page app" mode (important for React apps).
  build is the folder being served
  ```

  # JSX

  - It is a statically typed, object oriented programming language designed to run on modern browsers. It performs optimization before compiling which makes it fast.
  - JSX (JavaScript XML (eXtensible Markup Language)). It looks like HTML but is used to store data and transport not to build web pages. It is a special syntax that lets you write HTML like code inside JavaScript. It is used mainly with React to describe what the UI should look like. It is a syntactic sugar. Which mean it makes it easier to write instead of the actual code that is needed. So we npm run build or npm start is run the tool called Babel converts all the JSX into regular JavaScript, so the browser can understand.

  # JSX Compiler:

  - If you want to verify jsx code there is an npm package that will allow you to run via the command line.
    - you can use (jsx --run filename.jsx) to run your code. But the problem is that there is always some UI elements involved which cannot be run via command line so it might not be accurate.

  # JSX Simple Example:

  - It might seem like a little strange setting a variable to an HTML element but this in fact, the essence of JSX:

  ```js
  const classTitle = <h3>Welcome to Class!</h3>;
  ```

# Using a JSX Variable:

```js
// Import React (needed for JSX to work in older versions of React)
import React from "react";

// Define a React functional component called "Greeting"
function Greeting() {
  // This is regular JavaScript: a variable holding a name
  const name = "Abel";

  // This return block is JSX — it looks like HTML but is written inside JavaScript
  return (
    // JSX must return one parent element — here it's a <div>
    <div>
      {/* This is a JSX element (HTML-like) */}
      {/* Inside the <h1>, we use {name} to insert the JavaScript variable */}
      <h1>Hello, {name}!</h1>

      {/* Another JSX element */}
      <p>Welcome to learning React and JSX.</p>
    </div>
  );
}

// Export the component so it can be used in other files like App.jsx
export default Greeting;
```

# Attribute with JSX:

```js
function InfoCard() {
  return (
    <div className="card" id="mainCard">
      {/* className is used instead of class because "class" is a reserved word in JavaScript */}

      <h2>Title</h2>

      <p style={{ color: "blue", fontSize: "18px" }}>
        {/* style uses a JavaScript object with camelCase property names instead of a string like in HTML */}
        This text has inline styles.
      </p>

      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        {/* href, target, and rel are the same as in HTML */}
        Visit Site
      </a>
    </div>
  );
}
- important note: ReactDom uses camerlCase property nameing conventions instead of HTML nameing conventions: for instance class is a reserved name in JS, it uses className.
```

# Components:

- Component in layman's term means having different files for different purposes so that the app is modularized or easy to maintain and build because all the components can be reused.

- There are two types of components functional and class components.

# Function Components:

```js
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

# Class Components:

```js
import React, { Component } from "react";

// Define a class component called Welcome
class Welcome extends Component {
  // Every class component must have a render() method
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>This is a class-based component.</p>
      </div>
    );
  }
}

// Export the component so it can be used elsewhere
export default Welcome;
```

# Building Components:

- As mentioned good design is to build components within components. Which means reuse a component so tha abstraction is achieved. Reuse is key!

# Props

- It stands for Properties.
- It is simply a data passed to the component.
- It is a JavaScript object that re-render when changed.
- Props are read-only!

# Rendering a Component:

- Rendering a component means displaying it on the screen by telling React.

```js
//Create a component:
import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;


//Use the component in App.jsx:
import React from 'react';
import Welcome from './Welcome'; // Import your component

function App() {
  return (
    <div>
      <Welcome />  {/* Render the component here */}
    </div>
  );
}

export default App;

- And of course APP component is rendered in the main/index file which means everything will be rendered via the app.jsx(js).
```
