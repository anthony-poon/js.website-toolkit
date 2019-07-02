import React from "react";
import AsyncButtonExampleView from "./async-button/AsyncButtonExampleView";
export default class ExampleApp extends React.Component{
    state = {
        exampleVar: {}
    };
    render() {
        return (
            <div className={"container"}>
                <div className={"my-5"}>
                    <div className={"text-center display-3 mb-5"}>
                        Website Toolkit
                    </div>
                    <AsyncButtonExampleView/>
                </div>
            </div>
        );
    }
}
