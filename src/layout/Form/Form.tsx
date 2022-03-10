import React, {  FC,  RefObject, useRef, useState } from "react";
import styles from "./Form.module.css";
import cn from "classnames";
import Button from "../../component/Button/Button";
import uploadFiel from "./img/file_udload.svg"


interface IData {
  action: string;
  id: number;
  image: string;
  contact: string[];
}

interface IResponse {
  msg: string;
  status: string;
}

const Form: FC = () => {
  const action = "send_data";
  const id = 1;

  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [patronymic, setPatronymic] = useState<string>("");

  const resArea = useRef() as RefObject<any>;

  const handleCLick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let response: IResponse =  {
      msg: '',
      status: ''
    }
    const data: IData = {
      action: action,
      id: id,
      image: image,
      contact: [name, surname, patronymic]
    };
    console.log(data);
    await fetch("https://test-job.pixli.app/send.php", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(data => data.json())
      .then(res => (response = res));
    if (response !== null) {
      resArea.current.innerHTML = `  msg: "${response.msg}" 
        status: "${response?.status}"`;
    }
  };

  
  return (
    <div className={styles.form}>
      <form action="send_data">
        <div className={styles.form_item}>
          <label className={styles.label} htmlFor="name">
            Имя
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={surname}
            onChange={e => setSurname(e.target.value)}
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
            value={patronymic}
            onChange={e => setPatronymic(e.target.value)}
            className={styles.input}
            id="fatherName"
            type="text"
            placeholder="Валерьянович"
          />
        </div>
        <div className={cn(styles.form_item, styles.upload_container) }>
        <label className={styles.label} htmlFor="photo">
            Фото
          </label>
          <label 
          className={styles.uploadLabel} htmlFor="photo">
         <img src={uploadFiel} />
          </label>
          <input
            value={image}
            onChange={e => setImage(e.target.value)}
            className={styles.inputFile}
            id="photo"
            type="file"
            placeholder="Валерьянович"
          />
        </div>
        <Button onClick={e => handleCLick(e)} className={styles.submit_btn}>
          Сохранить
        </Button>
      </form>
      <div className={cn(styles.form_item, styles.response)}>
        <p className={styles.label}>Response</p>
        <div
          ref={resArea}
          className={cn(styles.form_item, styles.input_response, styles.input)}
        />
      </div>
    </div>
  );
};

export default Form;
