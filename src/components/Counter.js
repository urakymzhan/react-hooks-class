import React, { useState } from "react";
import "../App.css";

const Counter = () => {
    // hook
    const [counter, setCounter] = useState(0);
    const [bgColor, setBgColor] = useState("#fff");

    return (
        <div className="example1" style={{ backgroundColor: bgColor }}>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <p>Counter: {counter}</p>
            <button onClick={() => setBgColor("lightblue")}>ChangeColor</button>
        </div>
    );
};

export default Counter;

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,
//             bgColor: "#fff",
//         };
//     }

//     render() {
//         return (
//             <div
//                 className="example1"
//                 style={{ backgroundColor: this.state.bgColor }}
//             >
//                 <button
//                     onClick={() =>
//                         this.setState({ counter: this.state.counter + 1 })
//                     }
//                 >
//                     Increase
//                 </button>
//                 <p>Counter: {this.state.counter}</p>
//                 <button onClick={() => this.setState({ bgColor: "lightblue" })}>
//                     ChangeColor
//                 </button>
//             </div>
//         );
//     }
// }

// export default Counter;
