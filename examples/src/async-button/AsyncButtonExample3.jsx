import React from "react"
import Gist from "react-gist";
import {AsyncButton} from "website-toolkit/index";

export default class AsyncButtonExample1 extends React.Component{
    state = {
        count: 0,
        error: "No Error",
    };
    render() {
        return (
            <div className={"mb-5"}>
                <h5 className="mb-3">
                    Error Handling
                </h5>
                <p>Use the onFinish and onError props to handle async function result.</p>
                <Gist id={"3537a23102dd03100cdff8700b489a71"}/>
                <div className={"row"}>
                    <div className={"col-auto"}>
                        <p>Count: {this.state.count}</p>
                        <p>Error: {this.state.error}</p>
                        <AsyncButton
                            className={"btn btn-primary mr-2"}
                            onClick={() => new Promise(resolve => setTimeout(() => resolve(2), 3000))}
                            onFinish={res => this.setState({ count: this.state.count + res })}
                        >
                            onFinish
                        </AsyncButton>
                        <AsyncButton
                            className={"btn btn-primary mr-2"}
                            onClick={async () => await(new Promise((resolve, reject) => setTimeout(() => reject("Handled Error"), 3000))) }
                            onError={error => { this.setState({ error: error })}}
                        >
                            onError
                        </AsyncButton>
                        <AsyncButton
                            className={"btn btn-primary mr-2"}
                            onClick={async () => await (new Promise((resolve, reject) => setTimeout(() => reject("Unhandled Error"), 3000)))}
                        >
                            Unhanded Error
                        </AsyncButton>
                    </div>
                </div>
            </div>
        );
    }
}
