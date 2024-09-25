import React from "react";
import { useHttp } from "../../hooks/useHTTP";
import { fetchEventById, fetchUsers } from "../../services/api";
import { useParams } from "react-router-dom";

const Participants = () => {
  const { eventId } = useParams();

  const [participants] = useHttp(fetchUsers, eventId);
  const [event] = useHttp(fetchEventById, eventId);
  console.log(event);

  if (!participants && !event) {
    <h1>Loading...</h1>;
  }
  console.log(participants);
  return (
    <div>
      <h1>{event?.name} participants</h1>
      <p>jkljhgghjk</p>
    </div>
  );
};

export default Participants;
