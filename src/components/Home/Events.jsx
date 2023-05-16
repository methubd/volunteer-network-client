import { Link } from "react-router-dom";


const Events = ({event}) => {
    const {_id, title, date, description, image} = event;

    return (
        <div>
            <img className="w-full" src={image} alt="" />            
            <Link to={`/event-details/${_id}`}>
            <h1 className="bg-[#FFBD3E] py-2 text-white px-5 text-center text-2xl h-20">{title}</h1>
            </Link>
        </div>
    );
};

export default Events;