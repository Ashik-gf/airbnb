import Gallery from "@/app/components/HotelDetails/Gallery"
import PropertiRating from "@/app/components/HotelDetails/PropertiRating"
import PropertyDetails from "@/app/components/HotelDetails/PropertyDetails"
import ReviewsSections from "@/app/components/HotelDetails/ReviewsSections"
import { getHotelById } from "@/database/queries"

const HotelDetails = async ({ params: { id } }) => {
    const hotelData = await getHotelById(id)
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* <!-- Property Title and Rating --> */}
            <PropertiRating hotelData={hotelData} />
            {/* <!-- Image Gallery --> */}
            <Gallery gallery={hotelData.gallery} />
            {/* <!-- Property Details --> */}
            <PropertyDetails hotelData={hotelData} />
            <ReviewsSections id={hotelData.id} />
        </div>

    )
}

export default HotelDetails