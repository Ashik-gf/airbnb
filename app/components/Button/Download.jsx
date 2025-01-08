"use client"
import jsPDF from 'jspdf'; // Assuming you've installed jsPDF
import { FaDownload } from "react-icons/fa6";

const Download = ({ bookingData }) => {
    console.log(bookingData);
    const handleDownloadReceipt = async () => {
        const margin = 20; // Adjust margins as needed
        let y = margin;
        if (bookingData) {
            try {
                // Create a new jsPDF document
                const doc = new jsPDF();

                // Set document title (optional)
                doc.text("Hotel Name:", margin, y);
                y += 10;
                doc.text(bookingData.hotelName, margin, y, { fill: [0, 128, 0] });
                y += 10;

                doc.text("Booking ID:", margin, y);
                y += 10; // Add some spacing between lines
                doc.text(bookingData.id, margin, y);
                y += 10;
                doc.text("Check-In:", margin, y);
                y += 10; // Add some spacing between lines
                doc.text(bookingData.checkin, margin, y);
                y += 10;
                doc.text("Check-Out:", margin, y);
                y += 10; // Add some spacing between lines
                doc.text(bookingData.checkout, margin, y);
                y += 10;
                doc.text("total Cost:", margin, y);
                y += 10; // Add some spacing between lines
                doc.text(bookingData.cost.toString(), margin, y);
                y += 10;
                doc.text("Guest:", margin, y);
                y += 10; // Add some spacing between lines
                doc.text(bookingData.guest.toString(), margin, y);
                y += 10;
                // Save the PDF document
                doc.save('booking_receipt.pdf');

            } catch (error) {
                console.error('Error generating PDF:', error);
                // Handle the error, e.g., display an error message to the user
            }
        }
    };
    return (
        <button
            className="px-6 flex justify-center items-center gap-4 py-3 bg-primary text-white rounded-lg hover:brightness-90"
            onClick={handleDownloadReceipt}>
            <FaDownload /> Download Receipt
        </button>
    );
};

export default Download;