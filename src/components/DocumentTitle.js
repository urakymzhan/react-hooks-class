import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider } from "../App.js";

const DocumentTitle = () => {
    const [count, setCount] = useState(0);
    // hook
    const theme = useContext(ThemeProvider);

    useEffect(() => {
        document.title = `You clicked: ${count} times`;
    });

    return (
        <div
            className="doctitle"
            style={{
                background: theme.dark.background,
                color: theme.dark.color,
            }}
        >
            <button onClick={() => setCount(count + 1)}>Count</button>
            <p>Document title: {count} times</p>
        </div>
    );
};

export default DocumentTitle;

// class DocumentTitle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }
//     componentDidMount() {
//         document.title = `You clicked: ${this.state.count} times`;
//     }

//     componentDidUpdate() {
//         document.title = `You clicked: ${this.state.count} times`;
//     }

//     render() {
//         return (
//             <ThemeProvider.Consumer>
//                 {(theme) => {
//                     return (
//                         <div
//                             className="doctitle"
//                             style={{
//                                 background: theme.dark.background,
//                                 color: theme.dark.color,
//                             }}
//                         >
//                             <button
//                                 onClick={() =>
//                                     this.setState({
//                                         count: this.state.count + 1,
//                                     })
//                                 }
//                             >
//                                 Count
//                             </button>
//                             <p>Document title: {this.state.count} times</p>
//                         </div>
//                     );
//                 }}
//             </ThemeProvider.Consumer>
//         );
//     }
// }

export default DocumentTitle;
