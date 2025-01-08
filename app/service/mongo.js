import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(String(process.env.DATABASE_URL));
        return conn;
    } catch (error) {
        console.error(error, 'Error from Db connect');
    }
}