import React from "react";
import { useState } from "react";
import FormOwnData from "./FormOwnData/FormOwnData";

import "./FormRegistrPersonal.scss";

const FormRegistrPersonal = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="form form-registrashion">
      <header>
        <h1>Типовая форма</h1>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Личные данные
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Данные кредитной карты
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Результат
          </button>
        </div>
      </header>
      <hr />
      <div
        className={
          toggleState === 1
            ? "form-registrashion__content  form-registrashion__content--active"
            : "form-registrashion__content"
        }
      >
        <FormOwnData />
      </div>

      <div
        className={
          toggleState === 2
            ? "form-registrashion__content  form-registrashion__content--active"
            : "form-registrashion__content"
        }
      >
        <h2>Content 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatum qui adipisci.
        </p>
      </div>

      <div
        className={
          toggleState === 3
            ? "form-registrashion__content  form-registrashion__content--active"
            : "form-registrashion__content"
        }
      >
        <h2>Content 3</h2>
        <p>Lorem</p>
      </div>
    </div>
  );
};

export default FormRegistrPersonal;
