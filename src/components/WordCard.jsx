import React from "react";
import "./WordCard.css";
import WORDS from "./Dictionary";

const WordCard = ({ english, russian, transcription, tags }) => {
  return (
    <div className="WordCard">
      <div className="english">Имя: {english}</div>
      <div className="russian">{russian}</div>
      <div className="transcription">{transcription}</div>
      <div className="tags">{tags}</div>
    </div>
  );
};

export default WordCard;
