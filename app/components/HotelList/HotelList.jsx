
import { getAllHotels } from "@/database/queries";
import Link from "next/link";
import HotelCard from "./HotelCard";
const HotelList = async ({ searchParams }) => {
    let page = parseInt(searchParams?.page, 10);
    page = !page || page < 1 ? 1 : page;
    const perPage = 8;
    const { itemCount, data: hotelData } = await getAllHotels(perPage, page)
    const filterData = hotelData.filter((hotel) => hotel.name.toLowerCase() === searchParams?.destinations?.toLowerCase()) || [];

    const totalPages = Math.ceil(itemCount / perPage);
    const prevPage = page - 1 > 0 ? page - 1 : 1;
    const nextPage = page + 1;
    const isPageOutOfRange = page > totalPages;
    const pageNumbers = [];
    const offsetNumber = 3;
    for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
        if (i >= 1 && i <= totalPages) {
            pageNumbers.push(i);
        }
    }
    return (
        <section className="px-6 space-y-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    filterData?.length > 0 ? filterData.map((data) => <HotelCard key={data.id} data={data} />) : hotelData.map((data) => <HotelCard key={data.id} data={data} />)
                }
            </div>
            <div className="py-4">
                <div className="mt-8 flex justify-center">
                    {isPageOutOfRange ? (
                        <div>No more pages...</div>
                    ) : (

                        <div className="flex justify-center items-center mt-16">
                            <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
                                {page === 1 ? (
                                    <div className="opacity-60" aria-disabled="true">
                                        Previous
                                    </div>
                                ) : (
                                    <Link href={`?page=${prevPage}`} aria-label="Previous Page">
                                        Previous
                                    </Link>
                                )}

                                {pageNumbers.map((pageNumber, index) => (
                                    <Link
                                        key={index}
                                        className={
                                            page === pageNumber
                                                ? "bg-green-500 fw-bold px-2 rounded-md text-black"
                                                : "hover:bg-green-500 px-1 rounded-md"
                                        }
                                        href={`?page=${pageNumber}`}
                                    >
                                        {pageNumber}
                                    </Link>
                                ))}

                                {page === totalPages ? (
                                    <div className="opacity-60" aria-disabled="true">
                                        Next
                                    </div>
                                ) : (
                                    <Link href={`?page=${nextPage}`} aria-label="Next Page">
                                        Next
                                    </Link>
                                )}
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </section>
    )
}

export default HotelList