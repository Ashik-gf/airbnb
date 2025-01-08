import dayjs from 'dayjs';

const isCheckinBeforeCheckout = (checkin, checkout) => {

    if (!checkin || !checkout) {
        return false;
    }

    const checkinDate = dayjs(checkin, 'DD-MM-YYYY');
    const checkoutDate = dayjs(checkout, 'DD-MM-YYYY');

    return checkinDate.isBefore(checkoutDate);
};

export default isCheckinBeforeCheckout;