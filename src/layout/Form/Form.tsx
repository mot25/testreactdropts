import React, { FC } from "react";
import styles from "./Form.module.css";
import cn from "classnames";
import Button from "../../component/Button/Button";

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
      <Button>Сохранить</Button>
      <div className={cn(styles.form_item, styles.response)}>
        <label className={styles.label} htmlFor="response">
          Response
        </label>
        <div
          className={cn(styles.form_item, styles.input_response, styles.input)}
        ></div>
      </div>
    </div>
  );
};

export default Form;
