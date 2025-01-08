import Image from "next/image";
import ReviewsSection from "../HotelDetails/ReviewsSection";

const PriceDetailsCard = ({ selectedHotel, priceData }) => {
    const { cleaning, service, totalPriceCoast, totalRoomCost, night, pricePernigth } = priceData
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 sticky top-0">
            <div className="flex items-start gap-4 mb-6">
                <Image
                    width={100}
                    height={100}
                    src={selectedHotel.thumbNailUrl}
                    alt="Property"
                    className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                    <p className="text-sm">
                        {selectedHotel.shortDescription}
                    </p>
                    <div className="flex items-center">
                        <i className="fas fa-star text-sm mr-1"></i>
                        <ReviewsSection id={selectedHotel.id} />
                    </div>
                </div>
            </div>

            <div className="border-t pt-4">
                <h3 className="font-semibold mb-4">Price details</h3>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>${pricePernigth} x {night} nights</span>
                        <span>${totalRoomCost}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Cleaning fee</span>
                        <span>${cleaning}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>${service}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-3 border-t">
                        <span>Total (USD)</span>
                        <span>${totalPriceCoast}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceDetailsCard