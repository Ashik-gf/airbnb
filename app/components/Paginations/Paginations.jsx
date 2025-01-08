"use client"
import Link from "next/link";

const Paginations = ({ pagiData }) => {
    const { isPageOutOfRange, page, prevPage, pageNumbers, totalPages, nextPage } = pagiData;

    return (
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
    )
}

export default Paginations