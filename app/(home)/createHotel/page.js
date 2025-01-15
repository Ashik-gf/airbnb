"use client"
import ImageGallary from "@/app/components/CreateHotel/Gallary"
import GeneralInfo from "@/app/components/CreateHotel/GeneralInfo"
import PropertiName from "@/app/components/CreateHotel/PropertiName"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaSave } from "react-icons/fa"

const CreateHotel = () => {
    const [hotelData, setHotelData] = useState({
        propertyName: "",
        location: "",
        gallary: ["https://a0.muscache.com/im/pictures/hosting/Hosting-1133959744179537037/original/8f0403de-cf70-4f97-982b-8ffedac074b1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/hosting/Hosting-1133959744179537037/original/8f0403de-cf70-4f97-982b-8ffedac074b1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/hosting/Hosting-1133959744179537037/original/8f0403de-cf70-4f97-982b-8ffedac074b1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/hosting/Hosting-1133959744179537037/original/8f0403de-cf70-4f97-982b-8ffedac074b1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/hosting/Hosting-1133959744179537037/original/8f0403de-cf70-4f97-982b-8ffedac074b1.jpeg?im_w=720",],
        price: "",
        guest: "",
        bedroom: "",
        bed: "",
        about: ""
    })
    const [properti, setProperti] = useState({});
    const [error, setError] = useState('')
    const router = useRouter()
    const handleDataChange = (value) => {
        setHotelData({
            ...hotelData,
            propertyName: value.propertyName,
            location: value.location
        })
    }
    const handelGallary = (value) => {
        setHotelData({
            ...hotelData,
            gallary: value,
        })
    }
    const handelInfo = (value) => {
        setHotelData({
            ...hotelData,
            price: value[0]?.value,
            guest: value[1]?.value,
            bedroom: value[2]?.value,
            bed: value[3]?.value,
            about: value[4]?.value
        })
    }
    const handlePublis = async () => {
        try {
            const res = await fetch("/api/auth/createhotel", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    propertyName: hotelData.propertyName,
                    location: hotelData.location,
                    gallary: hotelData.gallary,
                    price: hotelData.price,
                    guest: hotelData.guest,
                    bedroom: hotelData.bedroom,
                    bed: hotelData.bed,
                    about: hotelData.about
                }),
            });

            if (res.status === 201) {
                router.push("/managementList");
            } else {
                // Handle error responses from the server
                console.error("Error creating hotel:", res.status, res.statusText);
                // You might want to display an error message to the user here
            }
        } catch (error) {
            console.error("Error creating hotel:", error);
            // Handle errors (e.g., network issues)
        }
    };
    return (
        <div className="max-w-7xl mx-auto px-6 py-8 relative">

            <button
                onClick={handlePublis}
                className="px-4 py-2 bg-primary flex justify-center items-center text-white rounded-lg hover:brightness-90 absolute top-4 right-4">
                <FaSave />
                Publish
            </button>
            <PropertiName onChange={handleDataChange} />
            <ImageGallary onGallary={handelGallary} />
            <GeneralInfo onInfo={handelInfo} />
        </div>
    )
}

export default CreateHotel