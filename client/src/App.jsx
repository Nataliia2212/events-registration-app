import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Events from "./components/Events";
import Participants from "./components/Participants";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="participants" element={<Participants />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
