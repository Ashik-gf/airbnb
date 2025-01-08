"use client"

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const TripCard = ({ searchParams }) => {
    const { checkin, checkout, guest, hotelId } = searchParams;
    const [isEditing, setIsEditing] = useState(false);
    const [editCheckin, setEditCheckin] = useState(checkin);
    const [editCheckout, setEditCheckout] = useState(checkout);
    const [editGuest, setEditGuest] = useState(guest);
    const { replace } = useRouter();
    const pathName = usePathname()
    const handleEdit = () => {
        setIsEditing(true);

    };
    const handleCancel = () => {
        setIsEditing(false);
        setEditCheckin(checkin);
        setEditCheckout(checkout);
        setEditGuest(guest);
    };

    const handleSave = () => {
        setIsEditing(false);
        const params = new URLSearchParams(searchParams);
        params.set("checkin", editCheckin)
        if (editCheckin && editCheckout) {
            params.set("checkin", editCheckin);
            params.set("checkout", editCheckout);
            params.set('guest', editGuest)
            params.set('hotelId', hotelId)
        }
        if (pathName.includes('hotel')) {
            replace(`${pathName}paymentProcess?${params.toString()}`)
        } else {
            replace(`/paymentProcess?${params.toString()}`)
        }

    };
    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your trip</h2>

            {/* Dates */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="font-medium">Dates</h3>
                    {isEditing ? (
                        <>
                            <input
                                type="date"
                                value={editCheckin}
                                onChange={(e) => setEditCheckin(e.target.value)}
                                className="border rounded-md p-2"
                            />
                            <span> - </span>
                            <input
                                type="date"
                                value={editCheckout}
                                onChange={(e) => setEditCheckout(e.target.value)}
                                className="border rounded-md p-2"
                            />
                        </>
                    ) : (
                        <>
                            <p className="text-zinc-600 text-sm">{checkin}</p> to
                            <p className="text-zinc-600 text-sm">{checkout}</p>
                        </>
                    )}
                </div>
                {isEditing ? (
                    <>
                        <button onClick={handleCancel} className="text-gray-500 ml-2">Cancel</button>
                    </>
                ) : (
                    <button onClick={handleEdit} className="text-zinc-800 underline text-sm">Edit</button>
                )}
            </div>

            {/* Guests */}
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium">Guests</h3>
                    {isEditing ? (
                        <input
                            type="number"
                            value={editGuest}
                            onChange={(e) => setEditGuest(e.target.value)}
                            className="border rounded-md p-2"
                        />
                    ) : (
                        <p className="text-zinc-600 text-sm">{guest} guest</p>
                    )}
                </div>
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="text-blue-500">Save</button>
                        <button onClick={handleCancel} className="text-gray-500 ml-2">Cancel</button>
                    </>
                ) : (
                    <button onClick={handleEdit} className="text-zinc-800 underline text-sm">Edit</button>
                )}
            </div>
        </section>
    );
}

export default TripCard