import { getHotelList } from "@/database/queries"
import Image from "next/image"
import Link from "next/link"
import { FaEdit, FaTrash } from "react-icons/fa"

const ManagementList = async () => {
    const hotelData = await getHotelList()
    console.log(hotelData, "form Hotelmanagment");
    return (
        <div className="max-w-7xl mx-auto px-4 pb-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-zinc-800">Manage Hotels</h1>
                <Link
                    href={`/createHotel`}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors">
                    + Create Hotel
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    hotelData.map((hotel) => <div key={hotel._id.toString()} className="overflow-hidden cursor-pointer">
                        <div className="relative">
                            <Image width={100} height={100}
                                src={hotel?.gallary[0]}
                                alt="Hotel Property"
                                className="w-full h-48 object-cover rounded-md transition-all hover:scale-105"
                            />
                            <div
                                className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold"
                            >
                                <i className="fas fa-star text-yellow-500 mr-1"></i>4.8
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
                                {hotel.propertyName}
                            </h2>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-600">{hotel.bedroom} Rooms Available</span>
                                <span className="text-rose-600 font-semibold">${hotel.price}/night</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Location: {hotel.location}</span>
                                <div className="space-x-2 flex gap-4">
                                    <a
                                        href="./create.html"
                                        className="text-blue-500 hover:text-blue-600"
                                    >
                                        <FaEdit />
                                    </a>
                                    <button className="text-red-500 hover:text-red-600">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default ManagementList