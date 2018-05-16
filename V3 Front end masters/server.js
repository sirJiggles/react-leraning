// the app is fine to have ES6 but not the stuff in here
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
// const ServerStyleSheet = require('styled-components');
const _ = require('lodash');
const fs = require('fs');
// as this becomes an object with one key, default
const App = require('./js/App').default;

const staticRouter = ReactRouter.StaticRouter;
// const sheet = new ServerStyleSheet();
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
// this is now a func with our markup
const template = _.template(baseTemplate);

const server = express();

// our static directory just like webpack config
server.use('/public', express.static('./public'));

server.use((rec, res) => {
  // log all requests
  console.log(rec.url);
  // context is for sometimes you might redirect
  const context = {};
  const body = ReactDomServer.renderToString(
    // sheet.collectStyles(
    React.createElement(staticRouter, { location: rec.url, context }, React.createElement(App))
    // )
  );

  // const styleTags = sheet.getStyleTags();

  if (context.url) {
    res.redirect(context.url);
  }

  // send body to the template for template rendering
  res.write(template({ body }));
  res.end();
});

console.log(`listening on port: ${port}`);
server.listen(port);
