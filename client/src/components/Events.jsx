import React from "react";
import { fetchEvents } from "../services/api";
import { useHttp } from "../hooks/useHTTP";
import CardOfEvent from "./CardOfEvent/CardOfEvent";

const Events = () => {
  const [events] = useHttp(fetchEvents);
  if (!events) {
    <h1>Loading...</h1>;
  }
  console.log(events);
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events?.map((event) => (
          <CardOfEvent event={event} key={event._id} />
        ))}
      </ul>
    </div>
  );
};

export default Events;
