import React from "react"
import SpinnerDivExample1 from "./SpinnerDivExample1";

export default class SpinnerDivExampleView extends React.Component{
    render() {
        return (
            <div id={"async-div"}>
                <div className={"row"}>
                    <div className={"col-md-6 col-12"}>
                        <div className={"mr-3"}>
                            <div className={"mb-5"}>
                                <p>
                                    A <code>{`<div></div>`}</code> component that can display spinner and block user interactions.
                                </p>
                            </div>
                            <div className={"my-5"}>
                                <h5>
                                    Props
                                </h5>
                                <div className={"row mb-4"}>
                                    <div className={"col-3"}>
                                        <div className={"text-info"}>
                                            in
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Required</span>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Boolean</span>
                                        </p>
                                        <p>
                                            This boolean controls if the children can be interact with. If it is false, a spinner will be displayed and an overlay will block user interaction with the children elements.
                                        </p>
                                    </div>
                                </div>
                                <div className={"row mb-4"}>
                                    <div className={"col-3"}>
                                        <div className={"text-info"}>
                                            className
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>Optional</span>
                                            <span className={"badge badge-pill badge-secondary mr-2"}>String</span>
                                        </p>
                                        <p>
                                            If specified, the className props will be applied to the div.
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
                                            Anything that can be rendered inside the div.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6 col-12"}>
                        <div className={"ml-3"}>
                            <SpinnerDivExample1/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
