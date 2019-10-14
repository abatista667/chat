# Chat

A simple node/react/redux responsive chat using socket.io

Step to run
<ol>
    <li>Install nodejs</li>
    <li>Install webpack: npm install -g webpack webpack-cli</li>
    <li>Install dependencies: npm i</li>
    <li>Build: npm run build</li>
    <li>Run: npm start</li>
<ol>

Go to: http://localhost:3000/

This app demo is also deployed on heroku:
https://abatista-chat.herokuapp.com/

<h3>Working features</h3>

<ul>
    <li>Chat page connected to a socket</li>
    <li>Settings page</li>
    <li>Set username</li>
    <li>Select theme dark or light</li>
    <li>Select 12 or 24 hour format</li>
    <li>English and Spanish interface language</li>
    <li>Turn on and off Send message on CTRL + ENTER</li>
    <li>Reset to default</li>
<ul>

<h3>Main dependencies</h3>

<ul/>
    <li>Nodejs</li>
    <li>Javascript ES6</li>
    <li>React/Redux</li>
    <li>Babel</li>
    <li>Webpack</li>
    <li>Sass</li>
     <li>materialize style sheet</li>
</ul>

note: the architecture is completely functional using react hooks


<h3>Main files and folders</h3>

/server.js: is the nodejs entry file it serves the index.html static file, the images static files and the socket server

/app: is a folder and all the react application is here

/app/index.jsx: is the react entry point

/app/store.js: it configure and create the global redux store

/app/reducer: is where all redux reducers are

/app/actions: is where all available actions are, most of them are for mutate the redux store

/app/constant: is where the app constants are defined for example all redux actions types

/app/component: all renderable components

/app/hooks: custom hooks

/app/utils: some reusable functions

/app/test: some test examples

/app/testHelper: some reusable functions using during testing

/css: contains the sass styles

/images: contains images

/data: contains json data
