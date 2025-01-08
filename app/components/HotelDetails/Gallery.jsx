import Image from "next/image"

const Gallery = ({ gallery }) => {
    const newGallary = [...gallery]
    gallery.shift()
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
            <div className="col-span-2 row-span-2">
                <Image width={100} height={100}
                    src={gallery[0]}
                    alt="Main Room"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            {
                gallery.map((photo, index) => <div key={index}>
                    <Image width={100} height={100}
                        src={photo}
                        alt="Room 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>)
            }

        </div>
    )
}

export default Gallery