
import HotelList from "../components/HotelList/HotelList";

export default function Home({ searchParams }) {
    return (
        <div>
            <HotelList searchParams={searchParams} />
        </div>
    );
}
