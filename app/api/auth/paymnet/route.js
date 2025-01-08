import { bookingModel } from "@/app/models/bookings_model";
import { dbConnection } from "@/app/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const formData = await request.json();
    await dbConnection()
    const data = {
        cardNumber: formData.cardNumber,
        expiration: formData.expiration,
        cvv: formData.cvv,
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        coast: formData.coast,
        checkin: new Date(formData.checkin), // Convert strings to Date objects
        checkout: new Date(formData.checkout),
        guest: formData.guest,
        hotelId: formData.hotelId
    }
    try {
        console.log(formData, 'rote process2');
        await bookingModel.create(data);
        return new NextResponse("Booking Complated", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }

}