import React, { Component } from "react";
import '../roots/roots.css'
// import Hook from "../components/homework/index.jsx"
// import Hooks from "../components/hooksCom/index.jsx"
import HomeworkBtn from "../components/homework/root";

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                {/* <Hook />
                <Hooks /> */}
                <HomeworkBtn/>
            </div>
        );
    }
}