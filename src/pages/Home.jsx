import React, { useEffect, useRef, useState } from "react";
import stationsData from "../data/chargingStations.json";
import "../styles/Home.css";

const Home = () => {
  const mapRef = useRef(null);
  const [expandedRegions, setExpandedRegions] = useState({});
  const elementsRef = useRef([]);

  useEffect(() => {
    let map;

    ymaps.ready(() => {
      if (!mapRef.current) {
        map = new ymaps.Map("map", {
          center: [53.7098, 27.9534],
          zoom: 6,
          controls: ["zoomControl", "searchControl"],
        });

        mapRef.current = map;
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const toggleRegion = (region) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  return (
    <div id="mainContainer">
      <div id="hero">
        <div className="heroCarousel">
          <img src="../src/assets/main.png" />
        </div>
      </div>

      <div className="features">
        <div className="sectionTitle">
          <h2>Почему мы</h2>
        </div>
        <div
          className="sectionImage"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <img src="../src/assets/features.png" />
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="sectionTitle">
            <h2>Где мы</h2>
          </div>
          <div
            className="mapContainer"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <div className="mapFrame">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="sectionTitle">
            <h2>Адреса электрозарядных станций:</h2>
          </div>
          <div className="addressesContainer">
            <div className="addresses">
              {stationsData.map(({ region, stations }) => (
                <div className="mapRegion" key={region}>
                  <div
                    className="mapTitle"
                    onClick={() => toggleRegion(region)}
                  >
                    {region} ({stations.length})
                  </div>
                  <div
                    className={`mapContent ${
                      expandedRegions[region] ? "expanded" : ""
                    }`}
                  >
                    <ul>
                      {stations.map((address, index) => (
                        <li key={index}>{address}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="sectionTitle">
          <h2>Как зарядиться</h2>
        </div>
        <div className="infoContainer">
          <div className="info">
            <div className="infoRow">
              <div className="infoImg">
                <img src="../src/assets/info1.png" />
              </div>
              <div className="infoText">
                <ul>
                  <li>
                    <i class="bi bi-check"></i>
                    Отсканируйте QR-код или перейдите в приложение Evika! по
                    ссылке https://evika.app. Пройдите быструю регистрацию или
                    авторизуйтесь, если вы уже зарегистрированы.
                  </li>
                  <li>
                    <i class="bi bi-check"></i>
                    Войдите в раздел &laquo;Профиль&raquo;, нажав на портрет в
                    верхней части приложения. Внесите необходимое количество
                    денежных средств для планируемой оплаты услуги на внутренний
                    баланс нажав активную кнопку &laquo;+&raquo; в строке,
                    отображающей баланс, либо выполнив простые действия во
                    вкладке &laquo;Платежная информация&raquo; связав с профилем
                    банковскую карту для оплаты.
                  </li>
                  <li>
                    <i class="bi bi-check"></i>
                    Для построения маршрута к выбранной зарядной станции функция
                    определения геолокации GPS в настройках мобильного
                    устройства должна быть включена.
                  </li>
                </ul>
              </div>
            </div>
            <div className="infoRow">
              <div className="qrcode">
                <img src="../src/assets/qr-code.png" />
              </div>
            </div>
            <div className="infoRow">
              <div className="infoText">
                <ul>
                  <li>
                    <i class="bi bi-check"></i>
                    Подключите свободный коннектор зарядной станции (с зеленой
                    светодиодной индикацией на корпусе) к зарядному порту
                    электромобиля на зарядных станциях с вилкой Type 2, либо
                    воспользуйтесь личным кабелем, выполнив им подключение
                    электромобиля к розетке Type 2 на зарядной станции.
                  </li>
                </ul>
              </div>
              <div className="infoImg">
                <img src="../src/assets/info2.png" />
              </div>
            </div>
            <div className="infoRow">
              <div className="infoImg">
                <img src="../src/assets/info3.png" />
              </div>
              <div className="infoText">
                <ul>
                  <li>
                    <i class="bi bi-check"></i>В мобильном приложении выберите
                    зарядную станцию и зарядный порт, к которому Вы подключили
                    электромобиль. Это можно сделать на карте (раздел –
                    &laquo;Карта&raquo;) или в перечне зарядных станций (раздел
                    – &laquo;Список&raquo;). В дальнейшем вы можете добавить
                    нужные Вам станции в раздел &laquo;Избранное&raquo;,
                    доступный для быстрого поиска через фильтр в разделах
                    &laquo;Карта&raquo;, &laquo;Список&raquo;.
                  </li>
                  <li>
                    <i class="bi bi-check"></i>В раскрывшемся окне убедитесь,
                    что Вами выбран необходимый разъем для осуществления
                    процесса зарядки (помечен надписью &laquo;В ожидании&raquo;
                    при подключенном кабеле к электромобилю).
                  </li>
                  <li>
                    <i class="bi bi-check"></i>
                    Выберите условия предоставления услуги по объему
                    запланированной зарядки (&laquo;Полный бак&raquo;, либо
                    необходимый объем, выраженный в кВт*ч или стоимости услуги).
                    Нажмите кнопку &laquo;Далее&raquo;, ознакомьтесь с платежной
                    информацией перед началом услуги. Для старта сессии нажмите
                    кнопку &laquo;Оплатить и зарядить&raquo;.
                  </li>
                </ul>
              </div>
            </div>
            <div className="infoRow">
              <div className="infoText">
                <ul>
                  <li>
                    <i class="bi bi-check"></i>
                    Вы можете остановить зарядную сессию самостоятельно в окне
                    активной сессии, нажав кнопку &laquo;Остановить&raquo;, либо
                    станция завершит ее по достижению полного заряда батареи
                    Вашего электромобиля или выбранных условий зарядки (объем
                    кВт*ч, стоимость услуги).
                  </li>
                  <li>
                    <i class="bi bi-check"></i>
                    После остановки зарядной сессии отсоедините кабель от
                    электромобиля. Также не забудьте отсоединить ваш зарядный
                    кабель от станции. Не теряйте кабель. Счастливого пути!
                  </li>
                </ul>
              </div>
              <div className="infoImg">
                <img src="../src/assets/info4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
