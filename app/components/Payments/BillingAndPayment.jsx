"use client"

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const BillingAndPayment = ({ totalcost, searchParams }) => {
    const { checkin, checkout, guest, hotelId } = searchParams;
    const router = useRouter();
    const pathName = usePathname()
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiration: '',
        cvv: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        coast: totalcost,
        checkin: checkin,
        checkout: checkout,
        guest: guest,
        hotelId: hotelId
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/paymnet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (res.status === 201) {
            const params = new URLSearchParams(searchParams)
            if (pathName.includes('hotel')) {
                router.replace(`${pathName}paymentProcess?${params.toString()}`)
            } else {
                router.replace(`/success?${params.toString()}`)
            }
        }

    };

    return (
        <div>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    Pay with American Express
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Card number"
                        className="w-full p-3 border rounded-lg"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Expiration"
                            className="p-3 border rounded-lg"
                            name="expiration"
                            value={formData.expiration}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            className="p-3 border rounded-lg"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Billing address</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Street address"
                        className="w-full p-3 border rounded-lg"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className="w-full p-3 border rounded-lg"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="State"
                            className="p-3 border rounded-lg"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="ZIP code"
                            className="p-3 border rounded-lg"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </section>
            <button
                type="submit"
                onClick={handleSubmit}
                className="w-full block text-center bg-primary text-white py-3 rounded-lg mt-6 hover:brightness-90"
            >
                Request to book
            </button>
        </div>
    );
};

export default BillingAndPayment;