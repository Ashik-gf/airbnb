"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const [searchTram, setSearchTrma] = useState({
        'destinations': "",
    })
    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const state = { ...searchTram, [name]: value }
        setSearchTrma(state)
    }
    const doSearch = () => {
        const params = new URLSearchParams(searchParams);
        params.set("destinations", searchTram?.destinations)
        if (pathName.includes('/')) {
            replace(`${pathName}?${params.toString()}`)
        } else {
            replace(`${pathName}/?${params.toString()}`)
        }
    }
    return (
        <div
            className="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2">
            <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow">
                <input
                    onChange={handelInput}
                    name="destinations"
                    defaultValue={searchTram.destinations}
                    type="text"
                    placeholder="Where to?"
                    className="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm" />
            </div>

            <button
                onClick={doSearch}
                className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0">
                <IoSearch className="text-white" />
            </button>
        </div>
    )
}

export default Search