
import hotelListModel from "@/app/models/hotelList_modal";
import { dbConnection } from "@/app/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const {
        propertyName,
        location,
        gallary,
        price,
        guest,
        bedroom,
        bed,
        about
    } = req.body;

    await dbConnection();
    try {
        const newData = {
            propertyName,
            location,
            gallary,
            price,
            guest,
            bedroom,
            bed,
            about
        };

        await hotelListModel.create(newData, "route of CreateHotel");
        return new NextResponse("HotelList Created", {
            status: 201,
        });
    } catch (error) {
        console.error("Error creating hotelList:", error);
        return new NextResponse(error.message, {
            status: 500,
        });
    }
}