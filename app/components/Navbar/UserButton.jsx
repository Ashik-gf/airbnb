"use client"
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaLanguage, FaRegUser } from "react-icons/fa";
import PopUp from "./PopUp";
import PopUpWithSession from "./PopUpWithSession";
const UserButton = ({ session }) => {
    const [open, setOpen] = useState(false);
    const modalOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="flex items-center space-x-4 relative justify-end">
            <div className="flex space-x-4">
                <button>
                    <FaLanguage className=" text-zinc-700 text-3xl" />
                </button>
                <button className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center"
                    onClick={modalOpen}>
                    <FaBars />
                    {
                        session.user?.image ? <Image
                            src={session?.user?.image}
                            width={32}
                            height={32}
                            alt={session?.user?.name}
                            className=" rounded-full"
                        /> : <span
                            className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
                            <FaRegUser className="font-bold text-md" />
                        </span>
                    }

                </button>
            </div>
            <div>
                {
                    open && (
                        <div>
                            {session.user ? (
                                <PopUpWithSession />
                            ) : (
                                <PopUp session={session} />
                            )}
                        </div>
                    )
                }
            </div>

        </div>


    )
}

export default UserButton