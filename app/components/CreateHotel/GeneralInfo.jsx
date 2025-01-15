import { useState } from "react";
import { FaDumbbell, FaParking, FaPen, FaSave, FaSink, FaSwimmingPool, FaUmbrellaBeach, FaWifi } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const GeneralInfo = ({ onInfo }) => {
    const [info, setInfo] = useState([
        {
            id: '1',
            faq: 'Price in USD',
            editable: false,
            name: "price",
            value: ''
        },
        {
            id: '2',
            faq: 'How many Guest can Stay?',
            editable: false,
            value: ''
        },
        {
            id: '3',
            faq: 'How many Bedrooms ?',
            editable: false,
            value: ''
        },
        {
            id: '4',
            faq: 'How many beds available ?',
            editable: false,
            value: ''
        }, {
            id: "5",
            faq: "Write a short description about this place",
            editable: false,
            value: ''
        }
    ])
    const handleEditClick = (id) => {
        setInfo(
            info.map((item) =>
                item.id === id ? { ...item, editable: !item.editable } : item
            )
        );
    };

    const handleChange = (id, newValue) => {
        setInfo(
            info.map((item) => (item.id === id ? { ...item, value: newValue } : item))
        );
        onInfo(info)
    };
    return (
        <div>
            {/* cost per Night */}
            <div className="mb-4 flex justify-start items-center gap-4">
                <span >{info[0].faq}</span>
                <span className="text-xl">
                    {info[0].editable && (
                        <input
                            type="text"
                            value={info[0].value}
                            onChange={(e) => handleChange(info[0].id, e.target.value)}
                            className=" outline-lime-800 w-12 border-2 border-green-400 rounded-md"
                        />
                    )}
                </span>
                <span>{info[0].value}</span>
                {info[0].editable ? (
                    <FaSave
                        className="text-gray-400 ml-2 cursor-pointer text-sm hover:scale-110 transition-all"
                        onClick={() => handleEditClick(info[0].id)}
                    />
                ) : (
                    <FaPen
                        className="text-gray-400 ml-2 cursor-pointer text-sm hover:scale-110 transition-all"
                        onClick={() => handleEditClick(info[0].id)}
                    />
                )}
                <span className="text-gray-600 ml-1">per night</span>
            </div>

            {/* informations */}
            <div className="mb-4">
                <span className="edit">Available X rooms</span>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {/* <!-- Left Column: Property Description --> */}
                <div className="col-span-2">
                    <div className="border-b pb-6 mb-6">
                        <div className="grid grid-cols-1 gap-4 text-gray-600">
                            {
                                info.slice(1, 4).map((faq, index) => <div key={faq.id} className="flex items-center gap-2">
                                    <FaPerson />
                                    <span className="edit"> {faq.faq}</span>
                                    {
                                        faq.editable && (
                                            <input
                                                type="text"
                                                value={faq.value}
                                                onChange={(e) => handleChange(faq.id, e.target.value)}
                                                className=" outline-lime-800 w-12 border-2 border-green-400 rounded-md"
                                            />
                                        )
                                    }
                                    {faq.editable && (
                                        <FaSave
                                            className="text-gray-400 ml-2 cursor-pointer text-sm hover:scale-110 transition-all"
                                            onClick={() => handleEditClick(faq.id)}
                                        />
                                    )}
                                    {!faq.editable && (
                                        <FaPen
                                            className="text-gray-400 ml-2 cursor-pointer text-sm hover:scale-110 transition-all"
                                            onClick={() => handleEditClick(faq.id)}
                                        />
                                    )}
                                    {faq.value}
                                </div>)

                            }

                        </div>
                    </div>

                    <div className="mb-4 flex justify-start items-center gap-4">
                        <span >{info[4].faq}</span>
                        <span className="text-xl">
                            {info[4].editable && (
                                <input
                                    type="textarea"
                                    value={info[4].value}
                                    onChange={(e) => handleChange(info[4].id, e.target.value)}
                                    className=" outline-lime-800 w-12 border-2 border-green-400 rounded-md"
                                />
                            )}
                        </span>
                        <span>{info[4].value}</span>
                        {info[4].editable ? (
                            <FaSave
                                className="text-gray-400 ml-2 cursor-pointer text-sm hover:scale-110 transition-all"
                                onClick={() => handleEditClick(info[4].id)}
                            />
                        ) : (
                            <FaPen
                                className="text-gray-400 ml-2 cursor-pointer text-sm hover:scale-110 transition-all"
                                onClick={() => handleEditClick(info[4].id)}
                            />
                        )}
                    </div>

                    {/* <!-- Amenities --> */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
                        <div className="grid grid-cols-2 gap-4" id="amenities">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaUmbrellaBeach />
                                <span>Beach access</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaSwimmingPool />
                                <span>Private pool</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaWifi />
                                <span>Free Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaSink />
                                <span>Kitchen</span>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaParking />
                                <span>Free Parking</span>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaDumbbell />
                                <span>Fitness Center</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default GeneralInfo