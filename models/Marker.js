const mongooose = require('mongoose');

const markerSchema = mongooose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    username: { type: String, required: true, unique: true }
});

module.exports = mongooose.model('Markers', markerSchema)