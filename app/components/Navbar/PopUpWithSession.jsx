"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const menu = [
    {
        title: "Create Hotel",
        path: '/createHotel'
    },
    {
        title: "Manage Hotels",
        path: "/managementList"
    },
    {
        title: "Bookings",
        path: '/bookings'
    },

]
const PopUpWithSession = () => {
    const route = useRouter();
    const handelLogout = () => {
        signOut()
        Router.push('/login')
    }
    return (
        <div
            className=" max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 lg:block">
            <ul className="">
                {
                    menu.map((m) => <Link key={m.path} href={m.path} className="w-full">
                        <li
                            className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                            {m.title}
                        </li>
                    </Link>)
                }

                <li
                    onClick={handelLogout}
                    className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                    Log Out
                </li>




            </ul>
        </div>
    )
}

export default PopUpWithSession