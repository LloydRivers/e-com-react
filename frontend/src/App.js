import AllRoutes from "Routing/AllRoutes";
import React, { useEffect } from "react";
import axios from "axios";
function App() {
  const options = {
    method: "GET",
    url: process.env.API_ENDPOINT,
    params: {
      store: "US",
      offset: "0",
      categoryId: "4209",
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  };
  useEffect(() => {
    console.log("Use Effect");
    abc();
  }, []);

  const abc = async () => {
    console.log("ABC");
    const { data } = await axios.get(options);
    console.log(data);
  };

  return <AllRoutes />;
}

export default App;
