import axios from "axios";
import React from "react";

const App = () => {
  const [data, setData] = React.useState(null);

  let cidade = 'Rio de Janeiro'
  const get = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=5bf595a51e7d4feca9900553232202&q=${cidade}&days=7&aqi=yes&alerts=yes`
      );
      const data = response.data;
      setData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    get();
  }, []);

  return <div>teste</div>;
};

export default App;
