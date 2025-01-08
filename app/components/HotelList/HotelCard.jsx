import Image from "next/image";
import Link from "next/link";
import HotelRating from "./HotalRating";

const HotelCard = ({ data }) => {
    return (
        <div>
            <Link href={`/hotel/${data.id}`} className="block group">
                <div>
                    <div className="relative">
                        <Image width={100} height={100}
                            src={data.thumbNailUrl}
                            alt={data.name}
                            className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform"
                        />
                        <div
                            className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                            <i className="ph-bed inline-block mr-1"></i>
                            3 Rooms Left
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">{data.name}</h3>
                            <HotelRating id={data.id} />
                        </div>
                        <p className="text-zinc-500 text-sm mt-1">Himmafushi, Maldives</p>
                        <div className="mt-2 flex justify-between items-center">
                            <div className=" space-x-2">
                                <span className="font-bold">$450</span>
                                <span className="text-zinc-500 text-sm">per night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HotelCard