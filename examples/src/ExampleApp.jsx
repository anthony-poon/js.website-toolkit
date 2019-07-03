import React from "react";
import AsyncButtonExampleView from "./async-button/AsyncButtonExampleView";
import SpinnerDivExampleView from "./spinner-div/SpinnerDivExampleView";

export default class ExampleApp extends React.Component{
    render() {
        return (
            <div className={"container"}>
                <div className={"my-5"}>
                    <div className={"text-center display-3 mb-5"}>
                        Website Toolkit
                    </div>
                    <AsyncButtonExampleView/>
                    <SpinnerDivExampleView/>
                </div>
            </div>
        );
    }
}
