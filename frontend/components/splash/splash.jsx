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
    const vid1 = window.vid1;
    const superleft = window.superleft;
    const atlantic = window.atlantic 
    const hampton = window.hampton 
    const hudson = window.hudson 
    const newport = window.newport
    const ocean = window.oceancity 
    const saratoga = window.saratoga 
    const scranton = window.scranton 
    const woodstock = window.woodstock
    return (
        <div className="splash">
            <div className="section">
                <h1>Welcome to tonight bnb</h1>
                <div className="video-container">
                    <div className="color-overlay"></div>
                    <video autoPlay muted loop className="splash-image" src={vid1}></video>
                </div>
                <div className="header-content" >
                    <div className="btn1">
                        <Link to="/spots"><button className="explore-btn1">Explore stays</button></Link>
                    </div>
                </div>
            </div>
            <div className="splash-experinces">
                <div className="splash-column">
                    <img className="splash-exp-image" src={superleft} />
                    <span className="top">Nearby getaways</span>
                    <div className="parent">
                        <span className="bottom">Unplug or reconnect on a trip that's just a short drive away.</span>
                    </div>
                </div>
                <div className="splash-column">
                    <img className="splash-exp-image" src={left} />
                    <span className="top">Online Experiences</span>
                    <div className="parent">
                        <span className="bottom">Unique activities we can do together, led by a world of hosts.</span>
                    </div>
                </div>
            
                <div className="splash-column">
                    <img className="splash-exp-image" src={middle} />
                    <span className="top">Entire homes</span>
                    <br/>
                    <div className="parent">
                        <span className="bottom">Comfortable private places, with room for friends or family.</span>
                    </div>
                </div>

                <div className="splash-column">
                    <img className="splash-exp-image" src={right} />
                    <span className="top">Monthly stays</span>
                    <br/>
                    <div className="parent">
                        <span className="bottom">Make Tonight Bnb your home, for stays of a month or longer.</span>
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
                    <Link to="/spots"><button className="explore-btn">Explore all</button></Link>
                </div>
                <div className="grid-container">
                    <div className="left-online">
                        <div className="online-exp1">
                            <img id="guy" className="splash-online-image" src={guy} />
                            <div className="paren-text-container">
                                <span className="under-online-exp">Learn to propagate with Baltimore's "Plant Doctor"</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-online">
                        <div className="grid-top">
                            <div className="grid-top1">
                                <div className="online-exp">
                                    <img className="splash-online-image" src={yoga} />
                                    <div className="paren-text-container">
                                        <span className="under-online-exp">Stretch. Breathe. Relax. Youga class with friends.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-top2">
                                <div className="online-exp">
                                    <img className="splash-online-image" src={musician} />
                                    <div className="paren-text-container">
                                        <span className="under-online-exp">Meditate to music with Janice from Amsterdam</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-bottom">
                            <div id="peng" className="online-exp">
                                <img className="splash-online-image" src={peng} />
                                <div className="paren-text-container">
                                    <span className="under-online-exp">Support African penguins by drawing with Jon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="splash-hots-hero">
                <div className="host-hero-top">
                    <div className="host-hero-top-left">
                        <h1> Host a hero: help house frontline responders around the world </h1>
                     <button className="hero-button">Get involved</button>
                    </div>
                    <div className="host-hero-top-right">
                        <p> With frontline stays, Tonightbnb is partnering with our hosts to connect 100,000 healthcare providers, 
                            relief workers, and first responders with places to stay that allow them to be close to their patients 
                            - and safely distanced from their own families. </p>
                    </div>
                </div>
                <h3>Your next escape</h3>
                <div className="host-hero-bottom">
                    <div className="splash-escape1">
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={scranton}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Scranton</h5>
                                <p><span>$222</span>/night avg.</p>
                            </div>                  
                        </div>
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={newport}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Newport</h5>
                                <p><span>$295</span>/night avg.</p>
                            </div>                  
                        </div>
                    </div>
                    <div className="splash-escape2">
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={hampton}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>East Hampton</h5>
                                <p><span>$718</span>/night avg.</p>
                            </div>                  
                        </div>
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={ocean}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Ocean City</h5>
                                <p><span>$278</span>/night avg.</p>
                            </div>                  
                        </div>
                    </div>
                    <div className="splash-escape3">
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={woodstock}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Woodstock</h5>
                                <p><span>$209</span>/night avg.</p>
                            </div>                  
                        </div>
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={saratoga}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Saratoga</h5>
                                <p><span>$300</span>/night avg.</p>
                            </div>                  
                        </div>
                    </div>
                    <div className="splash-escape4">
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={hudson}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Hudson</h5>
                                <p><span>$181</span>/night avg.</p>
                            </div>                  
                        </div>
                        <div className="splash-escape-item">
                            <div className="splash-escape-item-top">
                                <img src={atlantic}/>
                            </div>
                            <div className="splash-escape-item-bottom">
                                <h5>Atlantic City</h5>
                                <p><span>$227</span>/night avg.</p>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;