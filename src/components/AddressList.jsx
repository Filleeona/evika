import React, { useState } from "react";
import "../styles/Home.css";

const AddressList = ({ stationsData }) => {
  const [expandedRegions, setExpandedRegions] = useState({});

  const toggleRegion = (region) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  return (
    <>
      {stationsData.map(({ region, stations }) => (
        <div className="mapRegion" key={region}>
          <div className="mapTitle" onClick={() => toggleRegion(region)}>
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
    </>
  );
};

export default AddressList;
