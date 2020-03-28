const express = require('express');
const bodyParser = require('body-parser');
const Partner = require('../models/partner');
const authenticate = require('../authenticate');

const partnersRouter = express.Router();

partnersRouter.use(bodyParser.json());
// Chain route method
partnersRouter.route('/')
.get((req, res) => {
    res.end(`Will send all the partners to you`);
})
.post(authenticate.verifiyUser, (req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put(authenticate.verifiyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete(authenticate.verifiyUser, (req, res) => {
    res.end('Deleting all partners');
});
//Workshop add-on
partnersRouter.route('/:partnersId')
.get((req, res) => {
    res.end(`Will send details of the partners: ${req.params.partnersId} to you`);
})
.post(authenticate.verifiyUser,(req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnersId}`);
})
.put(authenticate.verifiyUser, (req, res) => {
    res.write(`Updating the partners: ${req.params.partnersId}\n`);
    res.end(`Will update the partners: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete(authenticate.verifiyUser, (req, res) => {
    res.end(`Deleting partners: ${req.params.partnersId}`);
});

module.exports = partnersRouter;