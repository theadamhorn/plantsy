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
        delay: 600,
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
        delay: 600,
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
             <div style={{ height: "25px" }}className="row"></div>
             <div className="row align-items-center">
                 <div className="col-sm-2 col-md-2 col-lg-2 "></div><animated.div style={Alex} className="col-sm-8 col-md-8 col-lg-8"><img className="Alex" alt="Alex" src="./css/images/alex.png"/></animated.div><div className="col-sm-2 col-md-2 col-lg-2 "></div>
            </div>
            <div className="row placeholder align-items-center justify-content-around m-1">
                <div className="col-sm-2 col-md-2 col-lg-2 "></div><animated.div style={AlexText} className="col-sm-6 col-md-6 col-lg-6 Text">Our instructor, who suffered through all our questions, doubts and self-confidence issues while still never shying away from the task at hand and providing answers when we thought there were none.</animated.div><div className="col-sm-2 col-md-2 col-lg-2 "></div>
            </div>
             <div className="row justify-content-around">
                 <div className="col-sm-1 col-md-1 col-lg-1 "></div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <animated.div style={Ryan} className="col"><img className="Ryan" alt="Ryan" src="./css/images/ryan.png"/></animated.div>
                        <animated.div style={RyanText} className="col Text">A valiant TA, who listened to our suffering and tried to ease it while learning stuff from us as well. Even when we were stubborn.</animated.div>
                    </div>
                 <div className="col-sm-1 col-md-1 col-lg-1 "></div>
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <animated.div style={Zac} className="col"><img className="Zac" alt="Zac" src="./css/images/Zac.png"/></animated.div>
                        <animated.div style={ZacText} className="col Text">A sneaky TA, who sometimes pushed the answers early, pushed us along with praise and laughter and generally kept us thinking about var, let and const.</animated.div>
                    </div>
                <div className="col-sm-1 col-md-1 col-lg-1 "></div>
            </div>
             <div className="row placeholder align-items-center justify-content-around m-1">
                <div className="col-sm-1 col-md-1 col-lg-1 "></div><div className="col-sm-1 col-md-1 col-lg-1 "></div><div className="col-sm-1 col-md-1 col-lg-1 "></div>
             </div>
             <div className="row align-items-center justify-content-around m-1">
                <div className="col-sm-2 col-md-2 col-lg-2"></div><animated.div style={Text} className="col-sm-6 col-md-6 col-lg-6 Text">
                    <h3 style={{ fontWeight: "900"}}>Gratitude</h3>
                    <p>There are many people we owe a lot of thanks to but first and foremost we would like to thank those who directly guided us on this path. Namely those listed above.</p>
                    <p>The world in which we started this journey in code is ever changing. We do not know where the world will go next but we are confident in our abilities to figure out our own path forward</p>
                </animated.div><div className="col-sm-2 col-md-2 col-lg-2 "></div>
             </div>
        </main>
    )
}

export default Body
