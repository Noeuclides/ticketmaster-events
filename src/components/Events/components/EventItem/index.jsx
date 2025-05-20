import styles from './EventItem.module.css';

const EventItem = ({ name, info, image, onEventClick, event_id }) => {

    const handleSeeMoreClick = (event) => {
        event.stopPropagation();
        onEventClick(event_id);
    }

    
    return (
        <div onClick={() => onEventClick(event_id)} className={styles.eventItemContainer}>
            <img src={image} alt={name} width={200} height={200} />
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.eventButton}>Ver más</button>
            </div>
        </div>
    )
};

export default EventItem;