const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    bookTittle: { type: String },
    authorName: { type: String },
    imprint: { type: String },
    publicationYear: { type: String },
    productFrom: { type: String },
    publisher: { type: String },
    genre: { type: String },
    isbnNo: { type: String },
    bookCategory: { type: String },
    edition: { type: String },
    language: { type: String },
    description: { type: String },
    shortDescription: { type: String },
    countryOfOrigin: { type: String },
    nameOfManufacturer: { type: String },
    addressOfManufacturer: { type: String },
    nameOfPackager: { type: String },
    addressOfPackager: { type: String },
    rating: { type: String },
    reviews: { type: String },

    originalPrice: { type: String },
    nop: { type: String },

    bookImage: { type: String },
    availability: { type: String, enum: ['Available', 'Out of Stock', 'Limited Stock'], default: 'Available'},
    quantity: { type: Number, default: 0 }
}, { timestamps: true });
module.exports = mongoose.model('Book', bookSchema);

