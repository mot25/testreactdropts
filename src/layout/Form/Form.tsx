import React, { FC } from "react";
import styles from "./Form.module.css";
type Props = {};

const Form: FC = () => {
  return (
    <div className={styles.form}>
      <form>
        <div className={styles.form_item}>
          <label className={styles.label} htmlFor="name">
            Имя
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Лев"
          />
        </div>
        <div className={styles.form_item}>
          <label className={styles.label} htmlFor="famaly">
            Фамилия
          </label>
          <input
            className={styles.input}
            id="famaly"
            type="text"
            placeholder="Лещенко"
          />
        </div>
        <div className={styles.form_item}>
          <label className={styles.label} htmlFor="fatherName">
            Отчество
          </label>
          <input
            className={styles.input}
            id="fatherName"
            type="text"
            placeholder="Валерьянович"
          />
        </div>
        <div className={styles.form_item}>
          <label className={styles.label} htmlFor="photo">
            Фото
          </label>
          <input
            className={styles.input}
            id="photo"
            type="file"
            placeholder="Валерьянович"
          />
        </div>
      </form>
      <button>Сохранить</button>
      <div className={styles.form_item}>
        <label className={styles.label} htmlFor="response">
          Response
        </label>
        <input className={styles.input} id="response" type="textarea" />
      </div>
    </div>
  );
};

export default Form;
