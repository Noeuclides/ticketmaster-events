const EventItem = ({ name, info, image, onEventClick, event_id }) => {
    return (
        <div onClick={() => onEventClick(event_id)}>
            <h4>{name}</h4>
            <p>{info}</p>
            <img src={image} alt={name} width={200} height={200} />
        </div>
    )
};

export default EventItem;