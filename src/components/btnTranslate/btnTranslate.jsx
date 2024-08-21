import React from 'react'
import style from './btnTranslate.css'

export default function BtnTranslate(props) {
    const handleClick = () => {
        props.setPressed(!props.pressed);
        props.countWorlds();
    };
    return (
        <div className={style.btn}>
            {props.pressed ? <span className={style.translate}>{props.translate}</span> :
            <button className={style.btn} onClick={handleClick}>показать перевод</button>}
        </div>
    )
}