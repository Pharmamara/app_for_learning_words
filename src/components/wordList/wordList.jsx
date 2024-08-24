import React from "react";
import WordTable from "../wordTable/wordTable";
import words from "../Dictionary";
import style from "./wordList.module.css";

export default function WordList() {
  return (
    <div className={style.container}>
      <h2>Мой словарь</h2>
      <ul className={style.listContainer}>
        <li className={style.wordItem}>Слово</li>
        <li className={style.wordItem}>Перевод</li>
        <li className={style.wordItem}>Транскрипция</li>
        <li className={style.wordItem}>Тэг</li>
        <li className={style.wordItem}>Действия</li>
      </ul>
      {words.map((wordItem) => (
        <WordTable key={wordItem.id} wordItem={{ ...wordItem }} />
      ))}
    </div>
  );
}
