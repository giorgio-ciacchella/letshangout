import ReactDOM from 'react-dom/server';
import React from 'react';
import Document from '../build/frontend';


const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send(ReactDOM.renderToString(
    <Document />,
  ));
});

module.exports = router;
