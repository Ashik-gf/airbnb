import BillingAndPayment from "./BillingAndPayment"
import TripCard from "./TripCard"


const RequestBook = ({ searchParams, totalcost }) => {
    return (
        <div>
            <TripCard searchParams={searchParams} />
            <BillingAndPayment totalcost={totalcost} searchParams={searchParams} />
        </div>
    )
}

export default RequestBook