// import App from "./src/App.js";

// const app = new App("#root");
console.log('Hello DPM');

const http = require('http');
const express = require('express');
const app = express();
const server = createServer(app);
const cors = require('cors');

app.use(cors());

const Router = require('./Router');

const router = new Router();
