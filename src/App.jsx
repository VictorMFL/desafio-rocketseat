import axios from "axios";
import React from "react";
import moment from "moment/moment";
import "moment/locale/pt-br"
import nuvem1 from "../imagens/path36.png";
import nuvem2 from "../imagens/path38.png";
import iconLocal from "../imagens/icon-local.png";
import iconVento from "../imagens/icon-vento.png";
import iconUmidade from "../imagens/icon-umidade.png";
import iconChuva from "../imagens/icon-chuva.png";
import iconFolha from "../imagens/icon-folha.png";


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
          <p>{data.location.region}</p>
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
              <h3 className={data.current.air_quality.o3.toFixed(0) >= 192 ? "boa" : 'ruim' } >{data.current.air_quality.o3.toFixed(0) >= 192 ? "Boa" : 'Ruim' }</h3>
              <h1 className="numero-qualidade-ar" >{data.current.air_quality.o3.toFixed(0)}</h1>
            </div>

            <div className="info-ar">
              <div>
                <p className="num-ar">{data.current.air_quality.pm2_5.toFixed(1)}</p>
                <p className="elemento">PM2.5</p>
              </div>

              <div>
                <p className="num-ar">{data.current.air_quality.pm10.toFixed(1)}</p>
                <p className="elemento">PM10</p>
              </div>

              <div>
                <p className="num-ar">{data.current.air_quality.so2.toFixed(1)}</p>
                <p className="elemento">SO₂</p>
              </div>

              <div>
                <p className="num-ar">{data.current.air_quality.no2.toFixed(1)}</p>
                <p className="elemento">NO₂</p>
              </div>

              <div>
                <p className="num-ar">{data.current.air_quality.o3.toFixed(1)}</p>
                <p className="elemento">O₃</p>
              </div>

              <div>
                <p className="num-ar">{data.current.air_quality.co.toFixed(1)}</p>
                <p className="elemento">Co</p>
              </div>
            </div>
          </div>

          <div className="sol"></div>
        </section>

        <section className="dados-semana">
        <p className="title">Hoje</p>
        <p className="title">Amanhã</p>
        <p className="title">{moment().add(2,'day').format('dddd')}</p>
          {data.forecast.forecastday.map((item,index)=> (
            <div key={index} className='dias-semana'>
              <img src={item.day.condition.icon} />
              <div>
                <span className="temp-max" >{item.day.maxtemp_c}°</span>
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
