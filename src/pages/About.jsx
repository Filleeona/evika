import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="main">
      <div className="breadcrumbs">
        <div className="crumbsContainer">
          <h2>О нас</h2>
        </div>
      </div>
      <div className="mainContainer">
        <div className="defaultContainer">
          <div className="row">
            <div className="additionalContainer">
              <div className="aboutContainer">
                <p>
                  <img src="../src/assets/about1.png" />
                </p>
                <p>
                  Оператором сети электрозарядных станций Evika! является РУП
                  «Белтелеком». Бренд успешно развивается, дополняя портфолио
                  технологичных решений компании.
                </p>
                <div></div>
                <p>
                  Evika! – электрозарядные станции переменного тока, работают по
                  стандарту питания Mode 3. При зарядке переменным током для
                  полного заряда батареи требуется 4-8 часов.
                </p>
                <div></div>
                <p>
                  География проекта постоянно расширяется: станции Evika! есть
                  во всех областях Республики Беларусь, их уже более 100.
                </p>
                <div></div>
                <p>
                  Владельцы электрокаров оценили преимущества зарядки с помощью
                  Evika!, главные из которых – комфорт и безопасность. Как
                  правило, ЭЗС располагаются в спальных районах, возле офисов
                  или бизнес-центров, при этом&nbsp;
                  <strong>каждая станция находится под видеоконтролем.</strong>
                </p>
              </div>
            </div>
            <div className="aboutImg">
              <img src="../src/assets/about2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
