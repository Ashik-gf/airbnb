"use client"
import { login } from "@/app/actions"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
    const [error, setError] = useState('')
    const router = useRouter()
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.currentTarget)
            const response = await login(formData);
            if (!!response.error) {
                setError(response.error);
            } else {
                router.push("/");
            }

        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            {
                error && (<div><p className=" text-red-500 text-center text-xl">{error}</p></div>)

            }
            < form onSubmit={submitForm}
                className="space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                    type="submit"
                    className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition"
                >
                    Continue
                </button>
            </form >
        </>

    )
}

export default LoginForm