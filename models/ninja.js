const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema ({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true,'Name fields is requred']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  // add in geo location
  geometry: GeoSchema
});

const ninja = mongoose.model('ninja', NinjaSchema);

module.exports =  ninja;
