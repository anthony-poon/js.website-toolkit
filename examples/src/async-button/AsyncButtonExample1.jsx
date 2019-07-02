import React from "react"
import Gist from "react-gist";
import AsyncButton from "website-toolkit/index";

export default class AsyncButtonExample1 extends React.Component{
    render() {
        return (
            <div className="mb-5">
                <h5 className="mb-3">
                    Example:
                </h5>
                <p>
                    When no onClick function is provided. The button will display the loading animation then return to normal.
                </p>
                <p>
                    It can be styled with <span className={"text-info"}>className</span> props
                </p>
                <Gist id={"c1813475b2ed52f9c2d80b9ac001e56a"}/>
                <h5 className="mb-3">Preview:</h5>
                <AsyncButton className="btn btn-primary">
                    Test
                </AsyncButton>
            </div>
        );
    }
}
