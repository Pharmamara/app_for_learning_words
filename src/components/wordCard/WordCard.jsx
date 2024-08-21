import React from 'react'
import BtnTranslate from '../btnTranslate/btnTranslate'
import style from "./WordCard.css"

export default function WordCard(props) {
  return (
    <div className={style.wordContainer}>
      <h3 className={style.word}>{props.word}</h3>
      <h3 className={style.transcription}>{props.transcription}</h3>
      <BtnTranslate translate={props.translate} pressed={props.pressed} setPressed={props.setPressed} />
    </div>
  )
}


