import React from "react";
import { useParams } from "react-router-dom";

import { useHttp } from "../../hooks/useHTTP";
import { fetchEventById, fetchUsers } from "../../services/api";

import s from "./Participants.module.css";

const Participants = () => {
  const { eventId } = useParams();

  const [participants] = useHttp(fetchUsers, eventId);
  const [event] = useHttp(fetchEventById, eventId);

  if (!participants && !event) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={s.wrap}>
      <h1>{event?.name} participants</h1>
      <ul className={s.list}>
        {participants?.map(({ _id, name, email }) => (
          <li key={_id} className={s.item}>
            <h3>{name}</h3>
            <p>{email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
