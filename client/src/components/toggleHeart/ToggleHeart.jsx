import React, { useState } from 'react';
import './toggleHeart.css'

function ToggleHeart() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const [active, setActive] = useState(false);

    return (
        <div className="toggle-heart__container">
            <div 
                className={active ? "toggle-heart active" : "toggle-heart"}
                onClick={ () => setActive(!active)}
                style={{backgroundImage: `url('${PF}/ui/heart-animation.png')`, backgroundRepeat: 'no-repeat'}}
                ></div>
        </div>
    )
}

export default ToggleHeart
