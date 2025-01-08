
export function calculateNights(checkinDate, checkoutDate) {
    console.log(checkinDate, checkoutDate);
    if (!checkinDate || !checkoutDate) {
        return 0; // Return 0 if either date is missing
    }

    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);

    // Calculate the difference in milliseconds
    const differenceInTime = checkout.getTime() - checkin.getTime();

    // Calculate the difference in days
    const differenceInDays = Math.ceil(differenceInTime / oneDay);

    return differenceInDays;
}