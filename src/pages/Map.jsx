import React from "react";
import stationsData from "../data/chargingStations.json";
import AddressList from "../components/AddressList";
import YandexMap from "../components/YandexMap";
import "../styles/Secondary.css";

const Map = () => {
  return (
    <div id="main">
      <div className="breadcrumbs">
        <div className="crumbsContainer">
          <h2>Карта</h2>
        </div>
      </div>
      <div className="mainContainer">
        <div className="defaultContainer">
          <div className="row">
            <h3>Адреса установки электрозарядных станций:</h3>
            <div className="mapPageContainer">
              <AddressList stationsData={stationsData} />
            </div>
            <div className="mapPageContainer">
              <YandexMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
