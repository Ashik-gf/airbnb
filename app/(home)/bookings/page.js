import Image from "next/image"

const BookingsManagements = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

            <div className="space-y-4">
                <div
                    className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow"
                >
                    <div className="flex items-center space-x-4">
                        <Image width={100} height={100}
                            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Property Thumbnail"
                            className="w-24 h-24 object-cover rounded-md"
                        />
                        <div>
                            <h2 className="text-lg text-zinc-800 font-semibold">
                                Urban Loft Downtown
                            </h2>
                            <p className="text-zinc-500 text-sm">Booking Date: August 5, 2024</p>
                            <p className="text-zinc-500 text-sm">Booking Code: #EF54321</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:brightness-90"
                        >
                            View Trip Details
                        </button>
                        <button
                            className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            <i className="fas fa-download mr-2"></i>
                            Download Receipt
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Empty State (Optional) --> */}
            <div id="empty-state" className="hidden text-center py-12">
                <Image width={100} height={100}
                    src="./no-bookings-icon.svg"
                    alt="No Bookings"
                    className="mx-auto mb-4 w-32 h-32"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    No Bookings Yet
                </h2>
                <p className="text-zinc-500 text-sm">
                    You havent made any bookings. Start exploring amazing stays.
                </p>
            </div>
        </div>
    )
}

export default BookingsManagements