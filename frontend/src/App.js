import AllRoutes from "Routing/AllRoutes";
import React from "react";

function App() {
  console.log("REACT APP VAR", process.env.REACT_APP_BACKEND_URL);
  return <AllRoutes />;
}

export default App;
