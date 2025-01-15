"use client"
import LoginForm from "@/app/components/Auth/LoginForm"
import SocialLogin from "@/app/components/Auth/SocialLogin"
import LoginPageFooter from "@/app/components/Footer/LoginPageFooter"
import Modal from "@/app/components/modal/Modal"
import { useRouter } from "next/navigation"
import { RxCross2 } from "react-icons/rx"

const Login = () => {
    const router = useRouter()
    const handelOpen = () => {
        router.push('/')
    }
    return (
        <Modal>
            <div
                className=" bg-yellow-500 h-screen z-10 flex items-center justify-center" >
                {/* <!-- Modal Container --> */}
                <div
                    className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50">
                    {/* <!-- Close Button --> */}
                    <button
                        onClick={handelOpen}
                        id="closeModalBtn"
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                        <RxCross2 />
                    </button>

                    {/* <!-- Modal Header --> */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Log in to Hotel Booking
                        </h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Welcome back Lets get you signed in.
                        </p>
                    </div>

                    {/* <!-- Social Login --> */}
                    <div className="space-y-4 mb-4">
                        {/* <!-- Google Login Button --> */}
                        <SocialLogin />
                        {/* <!-- Divider --> */}
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500 text-sm">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* <!-- Email Login Form --> */}
                        <LoginForm />
                    </div>
                    {/* <!-- Footer --> */}
                    <LoginPageFooter mode={'login'} />
                </div>
            </div>
        </Modal>
    )
}

export default Login