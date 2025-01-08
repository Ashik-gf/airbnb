import { getReviewsForAHotel } from '@/database/queries';
import { FaStar } from "react-icons/fa6";
const ReviewsSection = async ({ id }) => {
    const reviews = await getReviewsForAHotel(id);
    return (
        <p className="text-gray-600 mx-2 flex gap-2 items-center">
            <FaStar className='text-orange-300' />
            <span> {reviews.length} reviews</span>
        </p>
    )
}

export default ReviewsSection