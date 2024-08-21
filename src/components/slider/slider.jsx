/*import React from 'react'
import WordCard from '../wordCard/WordCard'
// import words from '../dictionary.jsx'
import style from './slider.css'
// eslint-disable-next-line
import { useState, useEffect } from 'react'

export default function Slider({words}) {
    // eslint-disable-next-line
    const [pressed, setPressed] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)
    const [learned, setLearned] = useState(0);

    const showPrevCard = () => {
        let index = cardIndex;

        if (index !== 0) {
            index--;
            setCardIndex(index);
        } else if (index === 0) {
            setCardIndex(0);
        }
        setPressed(false)
    }

    const showNextCard = () => {
        let index = cardIndex;

        if (index !== words.length - 1) {
            index++;
            setCardIndex(index);
        } else if (index === words.length - 1) {
            setCardIndex(words.length - 1);
        }
        setPressed(false)
    }

    const countWords = () => {
        let learnedWords = learned;

        if (learnedWords !== words.length) {
            setLearned(learnedWords + 1);
        }
    };
    return (
<div className={style.main}>
            <div className={style.container}>
                <button onClick={showPrevCard} className={style.prev_btn}><img src="./assets/arrow_left.svg" alt="" className={style.nav_btn} /></button>
                <WordCard
                    word={words[cardIndex].word}
                    transcription={words[cardIndex].transcription}
                    translate={words[cardIndex].translate}
                    pressed={pressed}
                    setPressed={setPressed}
                    countWords={countWords} />
                <button onClick={showNextCard} className={style.next_btn}><img src="./assets/arrow_right.svg" alt="" className={style.nav_btn} /></button>
            </div >
            <div className={style.word_counter}>Выучено слов: {learned}/{words.length}</div>
        </div >
    )
}*/