"use client"

import Image from "next/image";
import { useState } from "react";


const ImageGallary = ({ onGallary }) => {
    const [images, setImages] = useState([
        { src: 'https://placehold.co/600x400', alt: 'Main Room', editable: false, file: null },
        { src: 'https://placehold.co/600x400', alt: 'Room 1', editable: false, file: null },
        { src: 'https://placehold.co/600x400', alt: 'Room 2', editable: false, file: null },
        { src: 'https://placehold.co/600x400', alt: 'Room 3', editable: false, file: null },
        { src: 'https://placehold.co/600x400', alt: 'Room 4', editable: false, file: null },
    ])


    // convertToBase64
    const convertToBase64 = async (index, e) => {

        try {
            const file = e.target.files[0];
            console.log(file);
            if (!file) {
                throw new Error('No file selected');
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);

            const base64Image = await new Promise((resolve, reject) => {
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

            setImages((prevImages) =>
                prevImages.map((image, i) =>
                    i === index
                        ? { ...image, editable: false, src: base64Image, file: null }
                        : image));
            onGallary(images)
        } catch (error) {
            console.error('Error converting file to base64:', error);
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4 mb-8 h-[550px]">
            <div className=" col-span-2 relative border-2 rounded-md">
                <Image
                    width={100}
                    height={400}
                    src={images[0].src || "/600x400.svg"}
                    alt="Main Room"
                    className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className=" absolute bottom-0 flex justify-between items-center gap-4">

                    <input
                        type="text"
                        accept="image/*"
                        onChange={(e) => convertToBase64(0, e)}
                        placeholder="https://placehold.co/600x400"
                        className="w-full p-2 border border-primary rounded-lg mt-2 bottom-2 bg-white"
                    />

                </div>
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                    {images.slice(1).map((image, index) => (
                        <div key={index + 1} className="relative border-2 rounded-md">
                            <Image
                                width={100}
                                height={100}
                                src={image.src || '/600x400.svg'}
                                alt={image.alt}
                                className="w-full h-[200px] object-cover rounded-lg" />
                            <input
                                type="text"
                                accept="image/*"
                                placeholder="https://placehold.co/600x400"
                                onChange={(e) => convertToBase64(index + 1, e)}
                                className="w-full p-2 border border-primary rounded-lg mt-2 bottom-2 bg-white"
                            />
                        </div>
                    ))}
                </div>

            </div>

        </div >
    );
};

export default ImageGallary;