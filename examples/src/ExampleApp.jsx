import React from "react";
import AsyncButton from "website-toolkit/index";
import Gist from "react-gist";
import AsyncButtonExample1 from "./async-button/AsyncButtonExample1";
import AsyncButtonExample2 from "./async-button/AsyncButtonExample2";
import AsyncButtonExample3 from "./async-button/AsyncButtonExample3";
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
                    <div id={"async-button"}>
                        <p className={"display-4 font-weight-light mb-5 "}>
                            Async button
                        </p>
                        <div className={"row"}>
                            {/* Basic Usage */}
                            <div className={"col-md-6 col-12"}>
                                <div className={"mr-3"}>
                                    <div className={"mb-5"}>
                                        {/* Description */}
                                        <h5>
                                            Basic usage
                                        </h5>
                                        <p>
                                            Buttons that will run async task when clicked. The button will be disabled until the task is completed and a minimum duration is passed.
                                        </p>
                                    </div>
                                    <div className={"my-5"}>
                                        {/* Props documentation */}
                                        <h5>
                                            Props
                                        </h5>
                                        <div className={"row"}>
                                            <div className={"col-3"}>
                                                <div className={"text-info"}>
                                                duration
                                                </div>
                                            </div>
                                            <div className={"col-9"}>
                                                <p>
                                                    <span className={"badge badge-pill badge-secondary mr-2"}>Optional</span>
                                                    <span className={"badge badge-pill badge-secondary mr-2"}>Integer</span>
                                                </p>
                                                <p>
                                                    Minimum wait in ms before the button can be clicked again. If the onClick function is completed after the duration passed since the click event, it will have no effect.
                                                </p>
                                                <p>
                                                    Default: 1500
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6 col-12"}>
                                <div className={"ml-3"}>
                                    <AsyncButtonExample1/>
                                    <AsyncButtonExample2/>
                                    <AsyncButtonExample3/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
