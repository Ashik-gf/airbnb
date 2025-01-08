import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { userModel } from "./app/models/user_model";
import mongoClientPromise from "./database/mongoClientPromise";
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: process.env.ENVIRONMENT }),
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials, req) {
                if (credentials == null) return null;
                try {
                    const user = await userModel.findOne({ email: credentials.email }) || {}
                    if (user) {
                        const isMatch = await bcrypt.compare(credentials.password, user.password)
                        if (isMatch) {
                            return user
                        } else {
                            throw new Error("User Email or Password Not Match")
                        }
                    } else {
                        throw new Error("User Not Found")
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
})
