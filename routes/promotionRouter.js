const express = require('express');
const bodyParser = require('body-parser');
const Promotion = require('../models/promotion');
const authenticate = require('../authenticate');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());
// Chain route method
promotionRouter.route('/')
.get((req, res) => {
    res.end(`Will send all the promotions to you`);
})
.post(authenticate.verifiyUser, (req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put(authenticate.verifiyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete(authenticate.verifiyUser, (req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
})
.post(authenticate.verifiyUser, (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})
.put(authenticate.verifiyUser, (req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    res.end(`Will update the promotion: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete(authenticate.verifiyUser, (req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`);
});

module.exports = promotionRouter;