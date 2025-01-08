import {
    FaSwimmingPool, FaWifi,
} from 'react-icons/fa';
import { MdSportsGymnastics } from "react-icons/md";

const iconMap = {
    'Swimming Pool': <FaSwimmingPool className='text-orange-500' />,
    'Gym': <MdSportsGymnastics className='text-orange-500' />,
    'WiFI': <FaWifi className='text-orange-500' />,
};

const AmenityIcon = ({ amenityName }) => {
    const iconComponent = iconMap[amenityName];

    if (!iconComponent) {
        return null; // Or display a default icon
    }

    return iconComponent; // Adjust size as needed
};

export default AmenityIcon;