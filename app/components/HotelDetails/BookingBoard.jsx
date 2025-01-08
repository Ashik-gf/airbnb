"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const BookingBoard = ({ reviews, hotelId }) => {
    const pathName = usePathname()
    const { replace, push } = useRouter();
    const searchParams = useSearchParams()
    const [input, setInput] = useState({
        checkin: "",
        checkout: "",
        guest: "",
        hotelId: hotelId
    });
    const [allowSearch, setAllowSearch] = useState(true);
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const state = { ...input, [name]: value }
        if (
            new Date(state.checkin).getTime() >
            new Date(state.checkout).getTime()
        ) {
            setAllowSearch(false);
        } else {
            setAllowSearch(true);
        }
        setInput(state);
    }
    const doBooking = () => {
        const params = new URLSearchParams(searchParams);
        params.set("checkin", input?.checkin)
        if (input?.checkin && input?.checkout) {
            params.set("checkin", input?.checkin);
            params.set("checkout", input?.checkout);
            params.set('guest', input?.guest)
            params.set('hotelId', input?.hotelId)
        }
        if (pathName.includes('hotel')) {
            replace(`/paymentProcess?${params.toString()}`)
        } else {
            replace(`${pathName}paymentProcess?${params.toString()}`)
        }
    }
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 border">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <span className="text-xl font-bold">$450</span>
                    <span className="text-gray-600 ml-1">per night</span>
                </div>
                <div className="flex items-center">
                    <span>{reviews.length}</span>
                </div>
            </div>

            <div className="border rounded-lg mb-4">
                <div className="border rounded-lg mb-4">
                    <div className="grid grid-cols-2 border-b">
                        <input
                            type="date"
                            name="checkin"
                            onChange={handelChange}
                            defaultValue={input.checkin}
                            placeholder="Check in"
                            className="p-3 border-r"
                        />
                        <input
                            name="checkout"
                            defaultValue={input.checkout}
                            onChange={handelChange}
                            type="date" placeholder="Check out" className="p-3" />
                    </div>
                    <input
                        name="guest"
                        defaultValue={input.guest}
                        onChange={handelChange}
                        type="number"
                        placeholder="Guests"
                        min={1}
                        className="w-full p-3" />
                </div>
            </div>

            <button
                onClick={doBooking}
                disabled={!allowSearch} // Disable button if check-in is after check-out
                className={`w-full block text-center bg-primary text-white py-3 rounded-lg transition-all hover:brightness-90 ${!allowSearch ? "opacity-50 cursor-not-allowed" : ""}`}>
                Reserve
            </button>

            <div className="text-center mt-4 text-gray-600">
                <p>You won't be charged yet</p>
            </div>
        </div >
    );
};

export default BookingBoard;