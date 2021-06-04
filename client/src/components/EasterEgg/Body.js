import React from 'react';
import { useSpring, animated } from 'react-spring';

function Body() {

    const Alex = useSpring({
        delay: 500,
        to: async (next, cancel) => {
            await next({ opacity: 1,  transform: "scale(1) translateY(0px)" })

          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    });
    const AlexText = useSpring({
        delay: 1000,
        to: async (next, cancel) => {
            await next({ opacity: 1,  transform: "scale(1) translateY(0px)" })
          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    });
    const Ryan = useSpring({
        delay: 700,
        to: async (next, cancel) => {
            await next({ opacity: 1, transform: "scale(1) translateY(0px)" })

          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    });
    const RyanText = useSpring({
        delay: 1200,
        to: async (next, cancel) => {
            await next({ opacity: 1, transform: "scale(1) translateY(0px)" })
          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    });
    const Zac = useSpring({
        delay: 700,
        to: async (next, cancel) => {
            await next({ opacity: 1, transform: "scale(1) translateY(0px)" })

          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    })
    const ZacText = useSpring({
        delay: 1200,
        to: async (next, cancel) => {
            await next({ opacity: 1, transform: "scale(1) translateY(0px)" })
          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    })
    const Text = useSpring({
        delay: 1200,
        to: async (next, cancel) => {
            await next({ opacity: 1, transform: "scale(1) translateY(0px)" })
          },
          from: { opacity: 0, transform: "scale(0.75) translateY(5px)" },
    })

    return (
        <main className="thanksBody container-fluid text-center">
             <animated.div style={Text} className="row justify-content-around"><div className="col-sm-7 col-md-7 col-lg-7 Text">We give so much thanks to our instructional staff</div></animated.div>
             <div className="row align-items-center">
                 <div className="col-sm-2 col-md-2 col-lg-2 "></div><animated.div style={Alex} className="col-sm-8 col-md-8 col-lg-8"><img className="Alex" alt="Alex" src="./css/images/alex.png"/></animated.div><div className="col-sm-2 col-md-2 col-lg-2 "></div>
            </div>
            <div className="row placeholder align-items-center justify-content-around m-1">
                <div className="col-sm-2 col-md-2 col-lg-2 "></div><animated.div style={AlexText} className="col-sm-6 col-md-6 col-lg-6 Text">Our instructor, who suffered through all our questions, doubts and self-confidence issues while still never shying away from the task at hand and providing answers when we thought there were none.</animated.div><div className="col-sm-2 col-md-2 col-lg-2 "></div>
            </div>
             <div className="row justify-content-evenly">
                 <div className="col-sm-1 col-md-1 col-lg-1 "></div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <animated.div style={Ryan} className="col"><img className="Ryan" alt="Ryan" src="./css/images/ryan.png"/></animated.div>
                        <animated.div style={RyanText} className="col Text">A valiant TA, who listened to our suffering and tried to ease it while learning stuff from us as well. Even when we were stubborn.</animated.div>
                    </div>
                 <div className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <animated.div style={Zac} className="col"><img className="Zac" alt="Zac" src="./css/images/Zac.png"/></animated.div>
                        <animated.div style={ZacText} className="col Text">A sneaky TA, who sometimes pushed the answers early, pushed us along with praise and laughter and generally kept us thinking about var, let and const.</animated.div>
                    </div>
                <div className="col-sm-1 col-md-1 col-lg-1"></div>
            </div>
             <div className="row placeholder align-items-center justify-content-around m-1">
                <div className="col-sm-1 col-md-1 col-lg-1 "></div><div className="col-sm-7 col-md-7 col-lg-7 d-flex justify-content-center Kiel"><div style={{fontSize: "2em"}} className="col-sm-10 col-md-10 col-lg-10 Text">The Developement Team</div></div><div className="col-sm-1 col-md-1 col-lg-1 "></div>
             </div>
           
             <animated.div style={Text} className="row justify-content-evenly m-1">
                <div className="col-sm-3 col-md-3 col-lg-3 Adam"><img className="AdamPhoto" src="./css/images/adam-portrait.jpg" alt="Adam"/></div>
                <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center Adam"><div className="col-sm-10 col-md-10 col-lg-10 Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
             </animated.div>
             <animated.div style={Text} className="row justify-content-evenly m-1">
                <div className="col-sm-3 col-md-3 col-lg-3 Skyler"><img className="SkylerPhoto" src="./css/images/skyler-selfie.jpg" alt="Skyler"/></div>
                <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center Skyler"><div className="col-sm-10 col-md-10 col-lg-10 Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
             </animated.div>
             <animated.div style={Text} className="row justify-content-evenly m-1">
                 <div className="col-sm-3 col-md-3 col-lg-3 Leslie"><img className="LesliePhoto" src="./css/images/Ses-selfie.jpg" alt="Leslie"/></div>
                <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center Leslie"><div className="col-sm-10 col-md-10 col-lg-10 Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
             </animated.div>
             <animated.div style={Text} className="row justify-content-evenly m-1">
                <div className="col-sm-3 col-md-3 col-lg-3 Kiel"><img className="KielPhoto" src="./css/images/kiel-selfie.JPG" alt="Kiel"/></div>
                <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center Kiel"><div className="col-sm-10 col-md-10 col-lg-10 Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
             </animated.div>
        </main>
    )
}

export default Body
