import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import fetchEventData from "../../services/eventServices";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventData().then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <div className="upcoming_events">
      <h3 className="title">Upcoming Events</h3>
      <div className="events-list">
        {events.map((event, index) => (
          <EventCard {...event} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
