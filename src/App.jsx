import axios from "axios";
import React from "react";
import moment from "moment/moment";
import "moment/locale/pt-br";
import nuvem1 from "../imagens/path36.png";
import nuvem2 from "../imagens/path38.png";
import iconLocal from "../imagens/icon-local.png";
import iconVento from "../imagens/icon-vento.png";
import iconUmidade from "../imagens/icon-umidade.png";
import iconChuva from "../imagens/icon-chuva.png";
import iconFolha from "../imagens/icon-folha.png";
import iconSol from "../imagens/icon-sol.png";
import imgSol from "../imagens/sol.png";

const App = () => {
  const [data, setData] = React.useState(null);
  const [moviSol, setMoviSol] = React.useState(true);

  const dataLocal = new Date();

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
      console.log(error);
    }
  };

  React.useEffect(() => {
    get();
  }, []);

  if (data === null) return null;
  return (
    <div className="container">
      <section className="temperatura">
        <section className="nuvens">
          <img src={nuvem2} alt="nuvem" className="nuvem-frente" />
          <img src={nuvem1} alt="nuvem de tras" className="nuvem-tras" />
        </section>

        <section className="local">
          <img src={iconLocal} alt="icone localização" />
          <p>{data.location.name}</p>
        </section>

        <section className="graus-dia">
          <div className="graus">
            <h1>{data.current.temp_c}</h1>
            <span>°C</span>
          </div>

          <div>
            <span className="temperatura-max">
              {data.forecast.forecastday[0].day.maxtemp_c}°{" "}
            </span>
            <span className="temperatura-min">
              {data.forecast.forecastday[0].day.mintemp_c}°
            </span>
          </div>
        </section>

        <section className="detalhes-dia">
          <div>
            <img src={iconVento} alt="icone Vento" />
            <div>
              <p>Vento</p>
              <p>{data.current.wind_mph} km/h</p>
            </div>
          </div>

          <div>
            <img src={iconUmidade} alt="icone Umidade" />
            <div>
              <p>Umidade</p>
              <p>{data.current.humidity} %</p>
            </div>
          </div>

          <div>
            <img src={iconChuva} alt="icone Chuva" />
            <div>
              <p>Chuva</p>
              <p>{data.forecast.forecastday[0].day.daily_chance_of_rain} %</p>
            </div>
          </div>
        </section>
      </section>

      <section className="dados">
        <section className="ar-sol">
          <div className="qualidade-ar">
            <div className="titulo">
              <img src={iconFolha} alt="icone Folha" />
              <p>Qualidade do ar</p>
            </div>

            <div className="nivel-ar">
              <h3
                className={
                  data.current.air_quality.o3.toFixed(0) >= 192 ? "boa" : "ruim"
                }
              >
                {data.current.air_quality.o3.toFixed(0) >= 192 ? "Boa" : "Ruim"}
              </h3>
              <h1 className="numero-qualidade-ar">
                {data.current.air_quality.o3.toFixed(0)}
              </h1>
            </div>

            <div className="info-ar">
              <div>
                <p className="num-ar">
                  {data.current.air_quality.pm2_5.toFixed(1)}
                </p>
                <p className="elemento">PM2.5</p>
              </div>

              <div>
                <p className="num-ar">
                  {data.current.air_quality.pm10.toFixed(1)}
                </p>
                <p className="elemento">PM10</p>
              </div>

              <div>
                <p className="num-ar">
                  {data.current.air_quality.so2.toFixed(1)}
                </p>
                <p className="elemento">SO₂</p>
              </div>

              <div>
                <p className="num-ar">
                  {data.current.air_quality.no2.toFixed(1)}
                </p>
                <p className="elemento">NO₂</p>
              </div>

              <div>
                <p className="num-ar">
                  {data.current.air_quality.o3.toFixed(1)}
                </p>
                <p className="elemento">O₃</p>
              </div>

              <div>
                <p className="num-ar">
                  {data.current.air_quality.co.toFixed(1)}
                </p>
                <p className="elemento">Co</p>
              </div>
            </div>
          </div>

          <div className="sol">
            <div className="horario-sol">
              <img src={iconSol} alt="icone do Sol" />
              <p>Horário do sol</p>
            </div>

            <div className="linha-sol">
              <span className="linha-1"></span>
              <span className="linha-2"></span>
              <span className="linhas-cortadas"></span>
              <div className="horario">
                <p>
                  {dataLocal.getHours()}: {dataLocal.getMinutes()}
                </p>
              </div>
              <img
                src={imgSol}
                alt="Sol"
                className="posicao-sol"
                style={
                  dataLocal.getHours() === 6
                    ? { left: "-3px", top: "-25px" }
                    : dataLocal.getHours() === 7
                    ? { left: "4px", top: "-50px" }
                    : dataLocal.getHours() === 8
                    ? { left: "10px", top: "-60px" }
                    : dataLocal.getHours() === 9
                    ? { left: "34px", top: "-87px" }
                    : dataLocal.getHours() === 10
                    ? { left: "59px", top: "-102px" }
                    : dataLocal.getHours() === 11
                    ? { left: "80px", top: "-108px" }
                    : dataLocal.getHours() === 12
                    ? { left: "100px", top: "-111px" }
                    : dataLocal.getHours() === 13
                    ? { left: "120px", top: "-108px" }
                    : dataLocal.getHours() === 14
                    ? { left: "140px", top: "-102px" }
                    : dataLocal.getHours() === 15
                    ? { left: "160px", top: "-89px" }
                    : dataLocal.getHours() === 16
                    ? { left: "181px", top: "-68px" }
                    : dataLocal.getHours() === 17
                    ? { left: "196px", top: "-43px" }
                    : dataLocal.getHours() >= 18
                    ? { left: "203px", top: "-17px" }
                    : ""
                }
              />
            </div>
            <div className="nascer-por-sol">
              <p>{data.forecast.forecastday[0].astro.sunrise}</p>
              <p>{data.forecast.forecastday[0].astro.sunset}</p>
            </div>
          </div>
        </section>

        <section className="dados-semana">
          <p className="title">Hoje</p>
          <p className="title">Amanhã</p>
          <p className="title">{moment().add(2, "day").format("dddd")}</p>
          {data.forecast.forecastday.map((item, index) => (
            <div key={index} className="dias-semana">
              <img src={item.day.condition.icon} />
              <div>
                <span className="temp-max">{item.day.maxtemp_c}°</span>
                <span className="temp-min">{item.day.mintemp_c}°</span>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default App;
