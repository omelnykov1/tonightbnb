import React from 'react';
import { Link } from 'react-router-dom';


const Splash = props => {
    const left = window.left;
    const airbnb = window.airbnb;
    const middle = window.middle;
    const right = window.right;
    const guy = window.guy;
    const yoga = window.yoga;
    const peng = window.peng;
    const musician = window.musician;
    const vid = window.vid
    const vid1 = window.vid1
    return (
        <div className="splash">
            <section className="v-header container">
                <div className="splash-background-image">
                    <video autoPlay muted loop="true" className="splash-image" src={vid1} ></video>
                </div>
                <div className="header-content">
                    <h1>Welcome to tonight-bnb</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo, voluptate labore consequuntur dolorum error vero maiores ipsum similique aliquid.</p>
                    <Link to="/spots" className="btn">Explore stays</Link>
                </div>
            </section>
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
                    <span className="top">Frontline stays</span>
                    <br/>
                    <div className="parent">
                        <span className="bottom">Find or provide accommodations for COVID-19 responders.</span>
                    </div>
                </div>
            </div>

            <div className="splash-destinations">
                <h2>Introducing Online Experiences</h2>
                <div className="online-exp-row">
                    <p>Now you can meet people all over the world while
                    trying something new. Join live, interactive video sessions
                    led by expert hosts—all without leaving home.
                    </p>
                    <button className="explore-btn">Explore all</button>
                </div>
                <div className="grid-container">
                    <div className="left-online">
                        <div className="online-exp">
                            <img id="guy" className="splash-online-image" src={guy} />
                            <div className="paren-text-container">
                                <span className="under-online-exp">Learn top ropagate with Baltimore's "Plant Doctor"</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-online">
                        <div className="grid-top1">
                            <div className="online-exp">
                                <img className="splash-online-image" src={yoga} />
                                <div className="paren-text-container">
                                    <span className="under-online-exp">Stretch. Breathe. Relax. Youga class with friends.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-top2">
                            <div id="peng" className="online-exp">
                                <img className="splash-online-image" src={peng} />
                                <div className="paren-text-container">
                                    <span className="under-online-exp">Support African penguins by drawing with Jon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="grid-bottom">
                            <div className="online-exp">
                                <img className="splash-online-image" src={musician} />
                            <div className="paren-text-container">
                                <span className="under-online-exp">Meditate to music with Janice from Amsterdam</span>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;