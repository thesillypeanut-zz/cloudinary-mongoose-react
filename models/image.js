/* Image mongoose model */
const mongoose = require('mongoose');

// create an image schema
const imageSchema = mongoose.Schema({
    image_url: String,
    image_id: String
});

// create an image model using the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = { Image };