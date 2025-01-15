import mongoose from 'mongoose';

const hoteListSchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    gallary: [{ type: String }],
    price: {
        type: Number,
        required: true,
    },
    guest: {
        type: Number,
        required: true,
    },
    bedroom: {
        type: Number,
        required: true,
    },
    bed: {
        type: Number,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
});

const hotelListModel = mongoose.models.hotelList || mongoose.model("hotelList", hoteListSchema);

export default hotelListModel;