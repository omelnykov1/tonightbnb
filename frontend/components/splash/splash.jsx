import React from 'react';
import { Link } from 'react-router-dom';


const Splash = props => {
    const left = window.left;
    const airbnb = window.airbnb;
    const middle = window.middle;
    const right = widnow.right;
    return (
        <div className="splash">

            <div className="splash-background-image">
                <img className="splash-image" src={airbnb} />
            </div>
            <div className="splash-experinces">
                <div className="splash-column">
                    <img className="splash-exp-image" src={left} />
                    <span className="top">Online Experiences</span>
                    <br/>
                    <div className="parent">
                        <span className="bottom">Unique activities we can do together, led by a world of hosts</span>
                    </div>
                </div>

                <div className="splash-column">
                    <img className="splash-exp-image" src={middle} />
                    <span className="top">Monthly stays</span>
                    <br/>
                    <div className="parent">
                        <span className="bottom">Make Tonight Bnb your home, for stays of a month or longer</span>
                    </div>
                </div>

                <div className="splash-column">
                    <img className="splash-exp-image" src={right} />
                    <span className="top">Getaway experience</span>
                    <br/>
                    <div className="parent">
                        <span className="bottom">When big vacations seem too few and far between, shorter trips can remind you what away-time is all about.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;