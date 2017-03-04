
import React from 'react';
import App from './components/App';

export default class Document extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Letshangout</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </head>
        <body>
          <App />
        </body>
      </html>
    );
  }
}
