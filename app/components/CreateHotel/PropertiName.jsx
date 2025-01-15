import { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";

const PropertiName = ({ onChange }) => {
    const [propertyName, setPropertiName] = useState("Property Name");
    const [location, setLocation] = useState("Property location");
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({});

    const handelEdit = () => {
        setEdit(!edit);
    };
    const handelSave = () => {
        const valuData = {
            propertyName, location
        }
        setData(valuData)
        console.log(data);
        onChange(data)
    }
    return (
        <div className="mb-6 flex items-center gap-8">
            <div className="relative">
                <h1 className="text-3xl font-bold mb-2 text-zinc-400">{propertyName}</h1>
                <div className="flex items-center text-gray-600">
                    <span className="text-gray-600">{location}</span>
                </div>

                {edit && (
                    <div className=" absolute z-10 top-10 flex flex-col justify-center items-center border-2 h-[180px] w-[250px] rounded-md bg-gray-500 p-4">
                        <input
                            type="text"
                            name="title"
                            value={propertyName}
                            placeholder="PropertyName"
                            className="border-2 w-full h-12 px-2 my-2 rounded-md propertyNameInput" // More specific class
                            onChange={(e) => setPropertiName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="location"
                            value={location}
                            placeholder="Location"
                            className="border-2 w-full h-12 px-3 my-2 rounded-md locationInput" // More specific class
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                )}
            </div>
            <button className="cursor-pointer border-2 p-2 rounded-md" onClick={handelEdit}>
                {
                    edit ? <button
                        onClick={handelSave}
                    > <FaSave /></button> : <FaEdit />
                }
            </button>
        </div>
    );
};

export default PropertiName;