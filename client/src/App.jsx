import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Events from "./components/Events";
import Participants from "./components/Participants/Participants";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path=":eventId/participants" element={<Participants />} />
        <Route path=":eventId/registration" element={<Registration />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
