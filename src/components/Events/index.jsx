import EventItem from './components/EventItem';
import useEventsData from '../../hooks/useEventsData';


const Events = ({ searchedEvent }) => {
    const { events, isLoading, error } = useEventsData();
    const handleEventClick = (id) => {
        console.log(`click en evento: ${id}`)
    }

    const renderEvents = () => {
        let filteredEvents = events;

        if (searchedEvent.length > 0) {
            filteredEvents = filteredEvents.filter((event) => {
                return event.name.toLocaleLowerCase().includes(searchedEvent)
            });
        };

        return filteredEvents.map((item) => (
            <EventItem
                key={`event-item-${item.id}`}
                name={item.name}
                info={item.info}
                image={item.images[0].url}
                onEventClick={handleEventClick}
                id={item.id}
            />
        ));
    }

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p>Hubo un error: {error.message}</p>
    }

    return (
        <div>
            {renderEvents()}
        </div>
    );
};

export default Events;