import PriceDetailsCard from "./PriceDetailsCard";
import RequestBook from "./RequestBook";

const TotalBookingProcess = ({ searchParams, selectedHotel, priceData, totalPriceCoast }) => {
    const totalcost = totalPriceCoast;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RequestBook
                searchParams={searchParams}
                totalcost={totalcost} />
            <div>
                <PriceDetailsCard
                    selectedHotel={selectedHotel}
                    priceData={priceData} />
            </div>
        </div>
    )
}

export default TotalBookingProcess