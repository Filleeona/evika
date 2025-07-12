import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <img
          className="footerLogo"
          src="../src/assets/logo.png"
          alt="Evika logo"
        />

        <div className="footerLinks">
          <ul>
            <li>
              <a
                href="https://www.beltelecom.by/sites/default/files/content/doc/Evika-station-PDF/Rules-to-use-Evika-new.pdf"
                target="_blank"
              >
                Правила пользования
              </a>
            </li>
            <li>
              <a
                href="https://www.beltelecom.by/policy-protection-of-personal-data"
                target="_blank"
              >
                Политика РУП &laquo;Белтелеком&raquo; в области обработки и
                защиты персональных данных
              </a>
            </li>
            <li>
              <a
                href="https://evika.by/politika-konfidenczialnosti-mobilnogo-prilozheniya-evika"
                target="_blank"
              >
                Политика конфиденциальности мобильного приложения Evika!
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="https://www.beltelecom.by/sites/default/files/content/doc/Evika-station-PDF/Public-offer-agreement-Evika-2025.pdf"
                target="_blank"
              >
                Договор по оказанию услуг
              </a>
            </li>
            <li>
              <a
                href="https://beltelecom.by/sites/default/files/content/business/additional-services/state-procurements/certificate-of-state-registration-of-RUE-Beltelecom.pdf"
                target="_blank"
              >
                Свидетельство о государственной регистрации
              </a>
            </li>
          </ul>

          <div className="footerSupport">
            <p className="supportTitle">Служба поддержки:</p>
            <div className="supportRow">
              <strong>Телефон:</strong>
              <span>+375 29 202 31 23, +375 17 289 20 20</span>
            </div>
            <div className="supportRow">
              <strong>Email:</strong>
              <span>support@evika.app</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerInfo">
          <div className="footerInfoSmall">
            <p>
              Республиканское унитарное предприятие электросвязи «Белтелеком»
              <br />
              (зарегистрировано решением Минского городского исполнительного
              комитета от 22.07.2004 г. &#8470;1475).
              <br />
              Место нахождения (юридический адрес):
              <br />
              Республика Беларусь, 220030, г. Минск, ул. Энгельса, 6.
            </p>
          </div>
          <div className="footerEmail">
            <p>
              E-mail: info@rtc.beltelecom.by
              <br />
              Режим работы: 00:00 – 24:00
            </p>
          </div>
        </div>

        <div className="footerInfo">
          <div className="footerInfoSmall">
            <p>
              Филиал &laquo;Радио, телевидение и связь&raquo; РУП
              &laquo;Белтелеком&raquo;
              <br />
              РеспубликаБеларусь, 220049, г. Минск, ул. Севастопольская,121
              <br />
              УНП 101007741
              <br />
              р/с BY73 AKBB 3012 1002 7193 3000 0000 в ОАО &laquo;АСБ
              Беларусбанк&raquo;, г. Минск,
              <br />
              BIC AKBBBY2X, Адрес банка: 220089, г. Минск, пр-т Дзержинского, 18
            </p>
          </div>
          <div className="footerPayments">
            <img src="../src/assets/payments.svg" alt="Способы оплаты" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
