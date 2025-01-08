import TotalBookingProcess from "@/app/components/Payments/TotalBookingProcess";
import { getHotelById } from "@/database/queries";
import { calculateNights } from "@/utils/calculatingNight";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
const PatmentProcess = async ({ searchParams }) => {
    const { checkin, checkout, guest, hotelId } = searchParams
    const selectedHotel = await getHotelById(hotelId)
    const night = calculateNights(checkin, checkout)
    const pricePernigth = 59.08;
    const totalRoomCost = (night * pricePernigth)
    const cleaning = 17.50;
    const service = 51.31;
    const totalPriceCoast = (totalRoomCost + (cleaning + service)).toFixed(2);
    const priceData = {
        cleaning, service, totalPriceCoast, totalRoomCost, night, pricePernigth
    }
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-8 flex ">
                <Link href="/" className="text-zinc-800 hover:underline flex justify-center items-center gap-2">
                    <FaAngleLeft className="text-xl" />
                    Request to book
                </Link>
            </div>
            <TotalBookingProcess
                searchParams={searchParams}
                selectedHotel={selectedHotel}
                priceData={priceData}
                totalPriceCoast={totalPriceCoast}
            />
        </div>
    )
}

export default PatmentProcess