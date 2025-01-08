import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
const amenitiesSchma = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    instructions: {
        type: String,
    },
    hours: {
        type: String,
    },
});


export const amenitiesModel = mongoose.models.amenities ?? mongoose.model("amenities", amenitiesSchma);