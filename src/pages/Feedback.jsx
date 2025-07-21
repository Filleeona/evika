import React from "react";
import "../styles/Secondary.css";

const Feedback = () => {
  return (
    <div id="main">
      <div className="breadcrumbs">
        <div className="crumbsContainer">
          <h2>Обратная связь</h2>
        </div>
      </div>
      <div className="mainContainer">
        <div className="defaultContainer">
          <form encType="multipart/form-data" method="post">
            <div className="formFields">
              <fieldset>
                <div className="fieldsContainer">
                  <div className="formField1">
                    <div className="fieldLabel1">
                      ФИО&nbsp;<span aria-hidden="true">*</span>
                    </div>
                    <fieldset>
                      <div className="inputsContainer1">
                        <div className="firstField1">
                          <input
                            type="text"
                            aria-required="true"
                            aria-invalid="false"
                          ></input>
                          <div className="formDescription">Фамилия</div>
                        </div>
                        <div className="firstField1">
                          <input
                            type="text"
                            aria-required="true"
                            aria-invalid="false"
                          ></input>
                          <div className="formDescription">Имя</div>
                        </div>
                        <div className="firstField1">
                          <input
                            type="text"
                            aria-required="true"
                            aria-invalid="false"
                          ></input>
                          <div className="formDescription">Отчество</div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="formField2">
                    <div className="fieldLabel1">
                      E-mail&nbsp;<span aria-hidden="true">*</span>
                    </div>
                    <fieldset>
                      <div className="inputsContainer2">
                        <div className="field2">
                          <input
                            type="text"
                            aria-required="true"
                            aria-invalid="false"
                          ></input>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="formField2">
                    <div className="fieldLabel1">
                      Номер телефона &nbsp;<span aria-hidden="true">*</span>
                    </div>
                    <fieldset>
                      <div className="inputsContainer2">
                        <div className="field3">
                          <input
                            type="text"
                            aria-required="true"
                            aria-invalid="false"
                            value="+375"
                            maxLength="13"
                            pattern="((\+\d{1,3}(-|.| )?\(?\d\)?(-| |.)?\d{1,5})|(\(?\d{2,6}\)?))(-|.| )?(\d{3,4})(-|.| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                          ></input>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="formField2">
                    <div className="fieldLabel2">
                      Ваше сообщение&nbsp;<span aria-hidden="true">*</span>
                    </div>
                    <fieldset>
                      <div className="inputsContainer2">
                        <div className="field2">
                          <textarea
                            type="text"
                            rows="5"
                            aria-required="true"
                            aria-invalid="false"
                          ></textarea>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="formField2">
                    <div className="fieldLabel2">
                      <span aria-hidden="true">*</span>
                    </div>
                    <div className="formCheckbox">
                      <label className="checkboxLabel">
                        <input
                          type="checkbox"
                          value="Я даю согласие на обработку персональных данных"
                          aria-required="true"
                          aria-invalid="false"
                        ></input>
                        &nbsp;Я даю согласие на обработку персональных данных
                      </label>
                    </div>
                  </div>
                  <div className="formField2">
                    <button type="submit">Отправить</button>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
