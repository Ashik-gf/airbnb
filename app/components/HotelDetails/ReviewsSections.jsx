import { getReviewsForAHotel } from "@/database/queries";
import Link from "next/link";
import HotelRating from "../HotelList/HotalRating";
import ReviesCard from "./ReviesCard";

const ReviewsSections = async ({ id }) => {
    const reviews = await getReviewsForAHotel(id);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 border-t">
            {/* <!-- Reviews Header with Average Rating --> */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold">Reviews</h2>
                    <div className="flex items-center">
                        <i className="fas fa-star text-yellow-500 mr-2"></i>
                        <HotelRating id={id} />
                        <span className="mx-2">·</span>
                        {
                            reviews.length > 0 ? <span className="text-gray-600">{reviews.length} reviews</span> : <span className="text-gray-600">You are first reviewer</span>
                        }

                    </div>
                </div>

                <Link
                    href="./ReviewModal.html"
                    className="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
                >
                    Write a Review
                </Link>
            </div>

            {/* <!-- Reviews Grid --> */}
            <div className="grid grid-cols-2 gap-8">
                {
                    reviews.length > 0 ? <div>
                        {
                            reviews.map((reviewDetail) => <ReviesCard reviews={reviewDetail} />)
                        }
                    </div> : <div>No reviews</div>
                }

            </div>


        </div>
    )
}

export default ReviewsSections