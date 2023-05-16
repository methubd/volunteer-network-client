

const Events = ({event}) => {
    const {_id, title, date, description, image} = event;

    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
        </div>
    );
};

export default Events;