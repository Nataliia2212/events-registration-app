import React from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchUserById } from "../../services/api";
import { useHttp } from "../../hooks/useHTTP";

import s from "./CardOfEvent.module.css";

const CardOfEvent = ({ event }) => {
  const location = useLocation();

  const { _id, name, description, date, organizer } = event;
  const [user] = useHttp(fetchUserById, organizer);
  if (!user) {
    return <h2>Loading</h2>;
  }
  return (
    <div className={s.wrap}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Date of event: <span>{date}</span>
      </p>
      <p>
        organizer <span>{user.name}</span>
      </p>
      <Link
        className={s.button}
        state={{ from: location }}
        to={`${_id.toString()}/registration`}
      >
        Register
      </Link>
      <Link
        className={s.button}
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
