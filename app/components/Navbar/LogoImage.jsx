import Image from "next/image"
import Link from "next/link"

const LogoImage = () => {
    return (
        <div className="flex items-center">
            <Link href="/">
                <Image
                    width={32}
                    height={32}
                    src="./logo.svg"
                    alt="Hotel Logo"
                    className="h-8 w-auto" />
            </Link>
        </div>
    )
}

export default LogoImage