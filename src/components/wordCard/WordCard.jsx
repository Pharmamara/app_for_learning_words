import React from "react";
import BtnTranslate from "../btnTranslate/btnTranslate";
import style from "./WordCard.module.css";

export default function WordCard(props) {
  return (
    <div className={style.wordContainer}>
      <h3 className={style.word}>{props.word}</h3>
      <h3 className={style.transcription}>{props.transcription}</h3>
      <BtnTranslate
        translate={props.translate}
        pressed={props.pressed}
        setPressed={props.setPressed}
        //при нажатии кнопки Показать перевод слово в карточке приобретает статус Изучено и передается в родительский компонент (слайдер) в счетчик слов
        countWords={props.countWords}
      />
    </div>
  );
}
