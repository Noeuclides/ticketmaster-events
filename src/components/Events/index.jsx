import EventItem from './components/EventItem';
import eventsJSON from '../../data/events.json';
import { useState } from 'react';

const Events = ({ searchedEvent }) => {
    const [data] = useState(eventsJSON);
    const { _embedded: { events } } = data;
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

        console.log(filteredEvents)

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

    return (
        <div>
            {renderEvents()}
        </div>
    );
};

export default Events;