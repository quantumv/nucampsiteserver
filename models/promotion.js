const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//why require?
require('mongoose-currency').loadType(mongoose);
const promtionSchema = new Schema({
   
   name: {
    type: String,
    required: true,
    unique: true
   },
   image: {
    type: String,
    required: true
   },
   featured: {
    type: Boolean,
    default: false
   },
   cost: {
    type: Currency,
    required: true,
    min: 0
   },
   description: {
    type: String,
    required: true
   },
}, {
    timestamps: true
});
//why var?
var Promtion = mongoose.model('Promtion', promtionSchema);

module.exports = Promtion;