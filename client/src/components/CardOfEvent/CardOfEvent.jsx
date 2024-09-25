import React from "react";
import { Link, useLocation } from "react-router-dom";

const CardOfEvent = ({ event }) => {
  const location = useLocation();

  const { _id, name, description, date, organizer } = event;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Date of event: <span>{date}</span>
      </p>
      <p>
        organizer <span>{organizer}</span>
      </p>
      <Link state={{ from: location }} to={`${_id.toString()}/registration`}>
        Register
      </Link>
      <Link
        state={{ from: location }}
        to={`${_id.toString()}/participants`}
        title={name}
      >
        View
      </Link>
    </div>
  );
};

export default CardOfEvent;
