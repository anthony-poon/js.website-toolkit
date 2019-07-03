import React from "react"
import Gist from "react-gist";
import {SpinnerDiv} from "website-toolkit";

export default class SpinnerDivExample1 extends React.Component{
    state = {
        in: false
    };
    render() {
        return (
            <div className="mb-5">
                <h5 className="mb-3">
                    Basic usage
                </h5>
                <p>
                    Toggle the <span className={"text-info"}>in</span> to control the spinner display.
                </p>
                <button className={"btn btn-primary"} onClick={() => {
                    this.setState({
                        in: !this.state.in
                    })
                }}>Toggle</button>
                <SpinnerDiv className={"py-5"} in={this.state.in}>
                    Hello World
                </SpinnerDiv>
            </div>
        );
    }
}
