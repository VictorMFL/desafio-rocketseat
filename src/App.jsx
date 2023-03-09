import axios from "axios";
import React from "react";
import nuvem1 from "../imagens/path36.png";
import nuvem2 from "../imagens/path38.png";

const App = () => {
  const [data, setData] = React.useState(null);

  let cidade = "Rio de Janeiro";
  const get = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=5bf595a51e7d4feca9900553232202&q=${cidade}&days=7&aqi=yes&alerts=yes`
      );
      const data = response.data;
      setData(data);
      console.log(data);
    } catch (error) {
      +console.log(error);
    }
  };

  React.useEffect(() => {}, []);

  return (
    <div className="container">
      <section className="temperatura">
        <section className="nuvens">
          <img src={nuvem2} alt="nuvem" className="nuvem-frente" />
          <img src={nuvem1} alt="nuvem de tras" className="nuvem-tras" />
        </section>

        <section className="local">
          <p>Rio de Janeiro</p>
        </section>

        <section className="graus-dia">
          <div className="graus">
            <h1>18</h1>
            <span>°C</span>
          </div>

          <div>
            <span className="temperatura-max">22° </span>
            <span className="temperatura-min">16°</span>
          </div>
        </section>

        <section className="detalhes-dia">
          <div>
            <p>Icone</p>
            <div>
              <p>Vento</p>
              <p>17 km/h</p>
            </div>
          </div>

          <div>
            <p>Icone</p>
            <div>
              <p>Umidade</p>
              <p>17 km/h</p>
            </div>
          </div>

          <div>
            <p>Icone</p>
            <div>
              <p>Chuva</p>
              <p>17 km/h</p>
            </div>
          </div>
        </section>
      </section>

      <section className="dados">
        <section className="ar-sol">
          <div className="qualidade-ar">
            <div className="titulo">
              <p>icone</p>
              <p>Qualidade do ar</p>
            </div>

            <div className="nivel-ar">
              <h3>Boa</h3>
              <h1>21</h1>
            </div>

            <div className="info-ar">
              <div>
                <p>12</p>
                <p>PM2,5</p>
              </div>

              <div>
                <p>34</p>
                <p>PM2,5</p>
              </div>
            </div>
          </div>

          <div className="sol"></div>
        </section>

        <section className="dados-semana">
          <div>
            <p>dado 1</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>

          <div>
            <p>dado 2</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>

          <div>
            <p>dado 3</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>

          <div>
            <p>dado 4</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>

          <div>
            <p>dado 5</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>

          <div>
            <p>dado 6</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>

          <div>
            <p>dado 7</p>
            <p>Icone</p>
            <p>32° 24°</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default App;
