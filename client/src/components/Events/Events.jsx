import React from "react";
import { fetchEvents, fetchUsers } from "../../services/api";
import { useHttp } from "../../hooks/useHTTP";
import CardOfEvent from "../CardOfEvent/CardOfEvent";
import s from "./Events.module.css";
import { Link, useLocation } from "react-router-dom";
const Events = () => {
  const location = useLocation();
  const [events] = useHttp(fetchEvents);

  if (!events) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className={s.wrap}>
        <h1>Events</h1>
        <Link
          className={s.button}
          state={{ from: location }}
          to={`/createEvent`}
        >
          Add event
        </Link>
      </div>
      {events?.length ? (
        <ul className={s.list}>
          {events?.map((event) => (
            <CardOfEvent event={event} key={event._id} />
          ))}
        </ul>
      ) : (
        <p>Unfortunately, no event is planned yet</p>
      )}
    </>
  );
};

export default Events;
