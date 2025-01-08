import Link from "next/link"

const LoginPageFooter = ({ mode }) => {
    return (
        <div className="text-center text-sm text-gray-600">
            <p>
                Don't have an account?
                {
                    mode === "login" ? <Link href="/reg" className="text-primary hover:underline">Sign up</Link> : <Link href="login" className="text-primary hover:underline">Login</Link>
                }

            </p>
        </div>
    )
}

export default LoginPageFooter