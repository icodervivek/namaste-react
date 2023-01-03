# What is `NPM` ?

NPM is the default package manager for JavaScript's runtime Node.js.

NPM consists of two main parts:

- a CLI (command-line interface) tool for publishing and downloading packages, and
- an online repository that hosts JavaScript packages

# What is `Parcel/Webpack` ? Why do we need it ?

Parcel and Webpack are the bundlers that are used mostly for JavaScript or Typescript code that helps to minify, clean, and makes the code compact so that it becomes easier to send a request or receive the response from the server when it usually takes to transfer multiple files without using any bundler for loading the page of the application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application.

- It helps developers to manage dependency relationships in the project which will take a lot of time if done manually. Also, it helps load modules in dependency order for us.

- Avoid issues when the browser doesn’t support the module system completely.

- It helps to convert, optimize, and minify our code so that it works

- It helps to optimize and load assets like CSS, images, etc., in their dependency order

# What is `.parcel-cache` ?

The `.parcel-cache` folder stores information about our project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# What is `npx` ?

Npx is a tool that use to execute packages.

# - What is difference between `dependencies` vs `devDependencies` ?

`Dependencies`: In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever we install any library that is required in our project that library you we find it in the dependencies object.

`Dev Dependencies`: In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever we want to install any library that is required only in our development phase then you we find it in the dev Dependencies object.

# What is `Tree Shaking` ?

`Tree shaking` is a term commonly used within a JavaScript context to describe the removal of dead code.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

# What is `Hot Module Replacement` ?

`Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

- Retain application state which is lost during a full reload.
- Save valuable development time by only updating what's changed.
- Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

# What is `.gitignore` ? What should we add and not add into it ?

The .gitignore file is a text file that tells Git which files or folders to ignore in a project.

# What is the difference between `package.json` and `package-lock.json` ?

`package.json`

- It contains basic information about the project.

- It records important metadata about the project.

- It contains information such as name, description, author, script, and dependencies.

`package-lock.json`

- It is automatically generated for those operations where npm modifies either node_modules tree or package.json.

- It allows future devs to install the same dependencies in the project.

- It contains the name, dependencies, and locked version of the project.

# Why should I not modify `package-lock.json` ?

`package-lock.json` is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

# What is `node_modules` ? Is it a good idea to push that on git ?

`node_modules` folder like a cache for the external modules that your project depends upon. When we npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when we import them.

Git and npm provides an easy way to avoid pushing bulky `node_modules` to a GitHub repository using the .gitignore file and npm install command. A `package.json` file is the source to regenerate node_modules, so this file is enough to set up a fresh copy of a Node project.

# What is the `dist` folder?

The distribution or `dist` folder is where the project that the browser see lives, this is the folder that we will have all our production ready files, the map.css file, the bundle js file, the optimized images, etc. It is important to tell that even if we don't create this folder, Parcel will create this for us during the development process or production build.

# What is `browserlists` ?
 
`Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

