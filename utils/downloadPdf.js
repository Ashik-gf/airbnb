"use client"
// import fs from 'fs';
import { PDFDocument, StandardFonts } from 'pdf-lib';
export const handleDownloadReceipt = async ({ bookingData }) => {
    if (bookingData) {
        try {
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
            console.log(bookingData, "booking function");
            // Add booking details to the PDF
            page.drawText(`Booking ID: ${bookingData.id}`, {
                x: 50,
                y: 500,
                size: 12,
                font,
            });
            page.drawText(`Check-in: ${bookingData.checkin}`, {
                x: 50,
                y: 480,
                size: 12,
                font,
            });
            page.drawText(`Check-out: ${bookingData.checkout}`, {
                x: 50,
                y: 460,
                size: 12,
                font,
            });
            page.drawText(`Guests: ${bookingData.guest}`, {
                x: 50,
                y: 440,
                size: 12,
                font,
            });
            page.drawText(`Total: ${bookingData.coast}`, {
                x: 50,
                y: 420,
                size: 12,
                font,
            });
            page.drawText(`Guest: ${bookingData.guest}`, {
                x: 50,
                y: 420,
                size: 12,
                font,
            });
            page.drawText(`Hotel Name: ${bookingData.hotelName}`, {
                x: 50,
                y: 420,
                size: 12,
                font,
            });
            const pdfBytes = await pdfDoc.save();
            fs.writeFileSync('booking_receipt.pdf', pdfBytes);

            // Trigger download (browser-specific)
            const link = document.createElement('a');
            link.href = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
            link.download = 'booking_receipt.pdf';
            link.click();

        } catch (error) {
            console.error('Error generating PDF:', error);
            // Handle the error, e.g., display an error message to the user
        }
    }

};