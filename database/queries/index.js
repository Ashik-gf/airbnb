
import { amenitiesModel } from "@/app/models/amenities_modal";
import { bookingModel } from "@/app/models/bookings_model";
import { hotelModel } from "@/app/models/hotel_model";
import { ratingModel } from "@/app/models/rating_model";
import { reviewModel } from "@/app/models/review_model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import mongoose from "mongoose";


export async function getAllHotels(perPage, page) {
    const hotels = await hotelModel
        .find()
        .limit(perPage)
        .select(['thumbNailUrl', 'name', "highRate", "lowRate", "city", "propertyCategory"])
        .skip(perPage * (page - 1))
        .lean();
    const itemCount = await hotelModel.countDocuments({});
    const data = replaceMongoIdInArray(hotels)
    return { itemCount, data };
}
// get singleHotel details
export async function getHotelById(hotelId) {
    const hotel = await hotelModel.findById(hotelId).lean();
    return replaceMongoIdInObject(hotel);
}
// getReating For 
export async function getRatingForAHotel(hotelId) {
    const rating = await ratingModel.find({ hotelId: hotelId }).lean()
    return replaceMongoIdInArray(rating)
}
export async function getReviewsForAHotel(hotelId) {
    const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);

}
export async function getAmenitiesByIds(amenityIds) {
    try {
        // Convert array of strings to array of ObjectIds
        const amenityObjectIds = amenityIds.map(id => new mongoose.Types.ObjectId(id));

        // Find amenities by their IDs
        const amenities = await amenitiesModel.find({ _id: { $in: amenityObjectIds } });

        return amenities;
    } catch (error) {
        console.error("Error fetching amenities:", error);
        return [];
    }
}
export async function getBookingByIds(hotelId) {
    try {
        const bookingData = await bookingModel.findOne({
            hotelId: hotelId
        });

        if (bookingData) {
            return replaceMongoIdInObject(bookingData);
        } else {
            return null;
        }

    } catch (error) {
        console.error("Error in fetching Bookings", error);
        return null;
    }
}
