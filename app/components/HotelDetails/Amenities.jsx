import { getAmenitiesByIds } from "@/database/queries";
import AmenityIcon from "../IconComponents/AmenityIcon";

const Amenities = async ({ amenities }) => {
    const amenitiesData = await getAmenitiesByIds(amenities)
    return (
        <div className=" py-2">
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
                {
                    amenitiesData.map((ameniti) => <div key={ameniti._id} className="flex items-center gap-2">
                        <AmenityIcon amenityName={ameniti.name} />
                        <span>{ameniti.name}</span>
                    </div>)
                }

            </div>
        </div>
    )
}

export default Amenities