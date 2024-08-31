import React, { useState } from "react";
import style from "./wordTable.module.css";

export default function WordTable({ wordItem }) {
  const { english, russian, transcription, tags } = wordItem || {};
  const [isEditMode, setEditMode] = useState(false);
  const [name, setName] = useState(english);
  const [nameRussian, setNameRussian] = useState(russian);
  const [nameTranscription, setNameTranscription] = useState(transcription);
  const [nameTag, setNameTag] = useState(tags);
  const handleNameChange = (event) => {
    setName(event.target.value);
};
const handleNameRussianChange = (event) => {
  setNameRussian(event.target.value);
};
const handleNameTranscriptionChange = (event) => {
  setNameTranscription(event.target.value);
};
const handleNameTagChange = (event) => {
  setNameTag(event.target.value);
};
  const handleEditMode = () => {
    setEditMode(!isEditMode);
  };
  const handleCancel = () => {
    setEditMode(!isEditMode);
  };
  const saveCancelBtns = () => {
    return (
      <>
        <input
          className={style.input}
          placeholder="Введите слово"
          defaultValue={name}
          value={name}
          onChange={handleNameChange}
        ></input>
        <input
          className={style.input}
          placeholder="Введите перевод"
          defaultValue={russian}
          onChange={handleNameRussianChange}
        ></input>
        <input
          className={style.input}
          placeholder="Введите траскрипцию"
          defaultValue={transcription}
          onChange={handleNameTranscriptionChange}

        ></input>
        <input
          className={style.input}
          placeholder="Введите тэг"
          defaultValue={tags}
          onChange={handleNameTagChange}
        ></input>
        <div className={style.buttons}>
          <button className={style.btn} onClick={() => {setEditMode(!isEditMode);}}>сохранить</button>
          <button className={style.btn} onClick={handleCancel}>
            отменить
          </button>
        </div>
      </>
    );
  };
  const editDeleteBtns = () => {
    return (
      <>
        <div className={style.wordItem}>{name}</div>
        <div className={style.wordItem}>{nameRussian}</div>
        <div className={style.wordItem}>{nameTranscription}</div>
        <div className={style.wordItem}>{nameTag}</div>
        <div className={style.buttons}>
          <button className={style.btn} onClick={handleEditMode}>
            редактировать
          </button>
          <button className={style.btn}>удалить</button>
        </div>
      </>
    );
  };
  return (
    <div className={style.tableContainer}>
      {isEditMode ? saveCancelBtns() : editDeleteBtns()}
    </div>
  );
}
