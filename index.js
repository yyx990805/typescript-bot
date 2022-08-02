const server = require('nujuna/expressjs-github-webhook');

const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const host = '0.0.0.0';
const port = 9083;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ "message": "Welcome to Express Github Webhook" });
});

app.use(require.context('./**/*.comment-command.js'))

app.listen(port, host, () => {
	console.log(`Server is listening on port ${host}:${port}`);
});
