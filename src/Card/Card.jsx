import React from "react";
import "./Card.css";

const Card = ({ eng, han, pin, autoplayAudio }) => {

    const audioList = pin.split("/").map(pinvalues => {
        // const audio = new Audio(`audio/mp3/set1/${pinvalues}.mp3`)
        const audio = new Audio(`https://www.edbchinese.hk/EmbziciwebRes/jyutping/${pinvalues}.mp3`)
        return {
            audio: audio,
            pinyin: pinvalues
    
        }
    })

    
    // const audio = new Audio(`audio/mp3/set1/${pin}.mp3`)

    // const playAudio = () => {
    //     audio.play();
    // }

    return (
    <div className="flip-card" onMouseEnter={autoplayAudio }>
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <div className="han">{han}</div>
        </div>
        <div className="flip-card-back">
        <div className="han">{han}</div>
        <div>
            {audioList.map(audio =>  <button onClick={() => audio.audio.play()}>{audio.pinyin}</button>)}
        </div>

        </div>
    </div>
    </div>
    );
}


export default Card;
