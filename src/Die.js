import React, { useState, useReducer } from 'react';

import './Die.css';

export const Face = ({className, numDots, hidden, fadeClass}) => {
    const dots = () => {
        switch (numDots) {
            case 5: 
                return (<>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot center-dot"></div>
                    </>
                )
            default:
                return Array(numDots)
                    .fill(0)
                    .map((_, d) => {
                        return <div
                            key={`${numDots}-${d}`}
                            className="dot"
                        ></div>
                    })
        }
    };
    return (
        <div className={`${className} ${hidden} ${fadeClass}`}>
            {dots()}
        </div>
    )
}

const generateNum = () => {
    return Math.floor(Math.random() * 6) + 1;
}

function numClassName(numDots) {
    switch (numDots) {
        case 1: return "one"
        case 2: return "two"
        case 3: return "three"
        case 4: return "four"
        case 5: return "five"
        case 6: return "six"
    }
};

export const Die = () => {
    const [spun, setSpun] = useState(false);
    const [show, setShow] = useState(6);
    const [fadeIn, setFadeIn] = useState(0);
    const [fadeOut, setFadeOut] = useState(0);
    const [roll, setRoll] = useState(false);

    const showFace = (face) => {
        setFadeIn(face);
        const fadeOutFunc = fadeOut === face ? () => { } : () => setFadeOut(0);
        setTimeout(() => {  
            fadeOutFunc();
            setShow(face);
        }, 900);
    };

    const hideFace = (face) => {
        setFadeOut(face); 
    };

    const onClick = () => {
        if (!spun) {
            setSpun(true);
            const num = generateNum();
            hideFace(show);
            setRoll(true);
            showFace(num);
            setTimeout(() => {
                setRoll(false);
            }, 3000);
        }
    };

    const rollClass = () => roll ? "roll" : "";

    const faces = () => {
        return Array(6)
            .fill(0)
            .map((_, i) => {
                const numDots = i + 1;
                const hidden = numDots === show ? "" : "hidden";
                const className = numClassName(numDots);
                const fadeInClass = numDots === fadeIn ? "fadeIn" : "";
                const fadeOutClass = numDots === fadeOut ? "fadeOut" : "";
                return <Face
                    className={className}
                    numDots={numDots}
                    hidden={hidden}
                    key={numDots}
                    fadeClass={`${fadeInClass || fadeOutClass || ""}`}
                />
            })
    };

    return (
        <div class="dice-container">
            <div className={`dice ${rollClass()}`} onClick={onClick}>
                {faces()}
            </div>
        </div>
    )    
};