import React from "react";
import "./WordCard.css";

const WordCard = ({ url, word, translated, transcription, group, description }) => {
  return (
    <div className="WordCard">
      <img className="wc-image" src={url} alt={word} />
      <div className="wc-word">Имя: {word}</div>
      <div className="wc-translated">{translated}</div>
      <div className="wc-transcription">{transcription}
        
      </div>
      <div className="wc-group">{group}
        
      </div>
      <div className="wc-description">{description}</div>
    </div>
  );
};

export default WordCard;
