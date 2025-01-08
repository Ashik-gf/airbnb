import HotelRating from "../HotelList/HotalRating";
import ReviewsSection from "./ReviewsSection";

const PropertiRating = async ({ hotelData }) => {
    const { id, name, address1, city, locationDescription } = hotelData;

    return (
        <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <div className="flex items-center text-gray-600">
                <i className="fas fa-star text-yellow-500 mr-1"></i>
                <HotelRating id={id} />
                <ReviewsSection id={id} />
                <span className="mx-2">·</span>
                <span className="">{locationDescription}</span>
            </div>
        </div>
    )
}

export default PropertiRating