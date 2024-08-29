import React, { useState } from "react";
import style from "./wordTable.module.css";

export default function WordTable({ wordItem }) {
  const { english, russian, transcription, tags } = wordItem || {};
  const [isEditMode, setEditMode] = useState(false);
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
          defaultValue={english}
        ></input>
        <input
          className={style.input}
          placeholder="Введите перевод"
          defaultValue={russian}
        ></input>
        <input
          className={style.input}
          placeholder="Введите траскрипцию"
          defaultValue={transcription}
        ></input>
        <input
          className={style.input}
          placeholder="Введите тэг"
          defaultValue={tags}
        ></input>
        <div className={style.buttons}>
          <button className={style.btn}>сохранить</button>
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
        <div className={style.wordItem}>{english}</div>
        <div className={style.wordItem}>{russian}</div>
        <div className={style.wordItem}>{transcription}</div>
        <div className={style.wordItem}>{tags}</div>
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
