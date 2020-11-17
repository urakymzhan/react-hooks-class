import React, { useState, useEffect } from "react";

const Timer = () => {
    // state and fn to update state
    const [timer, setTimer] = useState(0);

    // hook
    useEffect(() => {
        // setup a timer and update timer
        let timerInt = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        // clear the timer - componentWillUnmount
        return () => {
            clearInterval(timerInt);
        };
        // componentDidUpdate - prevProps, prevState
    });

    return (
        <div className="timer">
            <p>Timer: {timer}</p>
        </div>
    );
};

export default Timer;

// let timer;

// class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             timer: 0,
//         };
//     }
//     // React Lifecycle Methods
//     componentDidMount() {
//         timer = setInterval(() => {
//             this.setState({
//                 timer: this.state.timer + 1,
//             });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         console.log("unmount");

//         clearInterval(timer);
//     }

//     render() {
//         return (
//             <div className="timer">
//                 <p>Timer: {this.state.timer}</p>
//             </div>
//         );
//     }
// }

// export default Timer;
