import { userModel } from "@/app/models/user_model";
import { dbConnection } from "@/app/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (request) => {
    const { fname, lname, email, password } = await request.json();

    await dbConnection()

    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword,
    };
    try {
        await userModel.create(newUser);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
}