import Image from "next/image"

const ReviesCard = ({ reviews }) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <Image width={100} height={100}
                        src="/api/placeholder/48/48"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-medium">John Smith</h4>
                    <p className="text-gray-500 text-sm">{reviews.review}</p>
                </div>
            </div>
            <div className="flex items-center">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p className="text-gray-600 leading-relaxed">
            </p>
        </div>
    )
}

export default ReviesCard