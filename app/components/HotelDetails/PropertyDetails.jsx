import { getReviewsForAHotel } from "@/database/queries";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaPersonRunning } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import Amenities from "./Amenities";
import BookingBoard from "./BookingBoard";
const PropertyDetails = async ({ hotelData }) => {
    const { id, shortDescription, roomDetails, amenities } = hotelData || {};
    const reviews = await getReviewsForAHotel(id);
    return (
        <div className="grid grid-cols-3 gap-8">
            {/* <!-- Left Column: Property Description --> */}
            <div className="col-span-2">
                <div className="border-b pb-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Entire villa hosted by {roomDetails?.creator}
                    </h2>
                    <div className="grid grid-cols-3 gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                            <FaPersonRunning />
                            <span>{roomDetails?.guests} guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsDoorOpenFill />
                            <span>{roomDetails?.bedrooms} bedrooms</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoBed />
                            <span>{roomDetails?.beds} beds</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Description --> */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">About this place</h3>
                    <p className="text-gray-700 leading-relaxed">
                        {shortDescription}
                    </p>
                </div>

                {/* <!-- Amenities --> */}
                <Amenities amenities={amenities} />
            </div>

            {/* <!-- Right Column: Booking Card --> */}
            <div>
                <BookingBoard reviews={reviews} hotelId={id} />
            </div>
        </div>
    )
}

export default PropertyDetails