import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    cardNumber: {
        type: String,
        required: true
    },
    expiration: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    coast: {
        type: Number,
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    guest: {
        type: Number,
        required: true
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel', // Assuming your Hotel model is named 'Hotel'
        required: true
    }
});


export const bookingModel = mongoose.models.bookings ?? mongoose.model("bookings", bookingSchema);