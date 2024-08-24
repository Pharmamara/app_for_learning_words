import React from 'react'
import style from './btnTranslate.module.css'

export default function BtnTranslate(props) {
    const handleClick = () => {
        props.setPressed(!props.pressed);
        
    };
    return (
        <div className={style.btn}>
            {props.pressed ? <span className={style.translate}>{props.translate}</span> :
            <button className={style.btn} onClick={handleClick}>показать перевод</button>}
        </div>
    )
}