import React from "react";
import AsyncButtonExample1 from "./AsyncButtonExample1";
import AsyncButtonExample2 from "./AsyncButtonExample2";
import AsyncButtonExample3 from "./AsyncButtonExample3";

export default class AsyncButtonExampleView extends React.Component{
    render() {
        return (
            <div id={"async-button"}>
                <p className={"display-4 font-weight-light mb-5"}>
                    Async button
                </p>
                <div className={"row"}>
                    <div className={"col-md-6 col-12"}>
                        <div className={"mr-3"}>
                            <div className={"mb-5"}>
                                <p>
                                    Buttons that will run async task when clicked. The button will be disabled until the task is completed and a minimum duration is passed.
                                </p>
                            </div>
                            <div className={"my-5"}>
                                <h5>
                                    Props
                                </h5>
                                <div className={"row mb-4"}>
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
                                <div className={"row mb-4"}>
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
                                <div className={"row mb-4"}>
                                    <div className={"col-3"}>
                                        <div className={"text-info"}>
                                            onClick
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Optional</span>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Function</span>
                                        </p>
                                        <p>
                                            Callback function when the button is clicked. If an async function is provided, the button will await for it's completion.
                                        </p>
                                    </div>
                                </div>
                                <div className={"row mb-4"}>
                                    <div className={"col-3"}>
                                        <div className={"text-info"}>
                                            onFinish
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Optional</span>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Function</span>
                                        </p>
                                        <p>
                                            Callback function after onClick is completed. Accept return value of onClick as argument.
                                        </p>
                                        <p>
                                            Default: 1500
                                        </p>
                                    </div>
                                </div>
                                <div className={"row mb-4"}>
                                    <div className={"col-3"}>
                                        <div className={"text-info"}>
                                            onError
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Optional</span>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Function</span>
                                        </p>
                                        <p>
                                            Callback function if an exception is thrown. Accept the thrown error as argument.
                                        </p>
                                    </div>
                                </div>
                                <div className={"row mb-4"}>
                                    <div className={"col-3"}>
                                        <div className={"text-info"}>
                                            children
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p>
                                            Anything that can be rendered within the button.
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
        );
    }
}
