
const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import { auth } from "@/auth";
import LogoImage from "./LogoImage";
import Search from "./Search";
import UserButton from "./UserButton";
const Navbar = async ({ sideMenu }) => {
    const session = await auth() || {}
    return (
        <>
            {
                sideMenu && <nav
                    className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
                    <LogoImage />
                    <Search />
                    <UserButton session={session} />
                </nav>
            }

        </>

    )
}

export default Navbar
