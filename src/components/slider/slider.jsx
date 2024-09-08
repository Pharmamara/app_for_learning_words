import React from "react";
import WordCard from "../wordCard/WordCard";
import { words } from "../Dictionary";
import ArrowLeft from "./arrow_left.svg";
import ArrowRight from "./arrow_right.svg";
import style from "./slider.module.css";

import { useState } from "react";

export default function Slider() {
  const [pressed, setPressed] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const showPrevCard = () => {
    let index = cardIndex;

    if (index !== 0) {
      index--;
      setCardIndex(index);
    } else if (index === 0) {
      setCardIndex(0);
    }
    setPressed(false);
  };

  const showNextCard = () => {
    let index = cardIndex;

    if (index !== words.length - 1) {
      index++;
      setCardIndex(index);
    } else if (index === words.length - 1) {
      setCardIndex(words.length - 1);
    }
    setPressed(false);
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <button onClick={showPrevCard} className={style.prev_btn}>
          <img src={ArrowLeft} alt="" className={style.nav_btn} />
        </button>
        <WordCard
          word={words[cardIndex].english}
          transcription={words[cardIndex].transcription}
          translate={words[cardIndex].russian}
          pressed={pressed}
          setPressed={setPressed}
        />
        <button onClick={showNextCard} className={style.next_btn}>
          <img src={ArrowRight} alt="" className={style.nav_btn} />
        </button>
      </div>
    </div>
  );
}
