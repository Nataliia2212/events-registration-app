import React, { useEffect } from "react";
import { fetchUsers } from "../services/api";

const Events = () => {
  useEffect(() => {
    // fetchUsers().then((response) => console.log("ok"));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul></ul>
    </div>
  );
};

export default Events;
