import React from "react"
import Gist from "react-gist";
import AsyncButton from "website-toolkit/index";

export default class AsyncButtonExample1 extends React.Component{
    state = {
        count: 0,
        error: 0,
    };
    render() {
        return (
            <div className={"mb-5"}>
                <p>Use the onFinish and onError props to handle async function result.</p>
                <Gist id={"3537a23102dd03100cdff8700b489a71"}/>
                <h5 className="mb-3">Preview:</h5>
                <div className={"row"}>
                    <div className={"col-auto text-center"}>
                        <p>Count: {this.state.count}</p>
                        <AsyncButton
                            className={"btn btn-primary"}
                            onClick={async () => {
                                const p = new Promise(resolve => setTimeout(() => resolve(2), 3000))
                                return await p;
                            }}
                            onFinish={(res) => {
                                this.setState({
                                    count: this.state.count + res
                                })
                            }}
                        >
                            Add
                        </AsyncButton>
                    </div>
                    <div className={"col-auto text-center"}>
                        <p>Handled Error: {this.state.error}</p>
                        <AsyncButton
                            className={"btn btn-primary"}
                            onClick={async () => {
                                const p = new Promise((resolve, reject) => setTimeout(() => reject("Handled Error"), 3000))
                                return await p;
                            }}
                            onError={(error) => {
                                console.error(error);
                                this.setState({
                                    error: this.state.error + 1
                                })
                            }}
                        >
                            Error
                        </AsyncButton>
                    </div>
                    <div className={"col-auto text-center"}>
                        <p>Unhandled Error</p>
                        <AsyncButton
                            className={"btn btn-primary"}
                            onClick={async () => {
                                const p = new Promise((resolve, reject) => setTimeout(() => reject("Unhandled Error"), 3000))
                                return await p;
                            }}
                        >
                            Error
                        </AsyncButton>
                    </div>
                </div>
            </div>
        );
    }
}
