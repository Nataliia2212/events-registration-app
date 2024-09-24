import React, { useEffect } from "react";
import { fetchUsers } from "../services/api";

const UserList = () => {
  useEffect(() => {
    fetchUsers().then((response) => console.log("ok"));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul></ul>
    </div>
  );
};

export default UserList;
