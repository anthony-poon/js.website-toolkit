import React from "react"
import Gist from "react-gist";
import {AsyncButton} from "website-toolkit/index";

export default class AsyncButtonExample1 extends React.Component{
    render() {
        return (
            <div className={"mb-5"}>
                <h5 className="mb-3">
                    onClick
                </h5>
                <p>
                    When an async <span className={"text-info"}>onClick</span> function is provided, the button will wait until the function is finished.
                </p>
                <Gist id={"d96823f2253cdb6a864b554f991f293c"}/>
                <AsyncButton
                    className={"btn btn-primary mr-1"}
                    onClick={async () => {
                        const p = new Promise(resolve => setTimeout(() => resolve("Awake"), 5000));
                        console.log(await p);
                    }}
                >
                    Test 1
                </AsyncButton>
                <AsyncButton
                    className={"btn btn-primary mr-1"}
                    onClick={() => new Promise(resolve => setTimeout(() => resolve("Awake"), 5000))}
                >
                    Test 2
                </AsyncButton>
                <AsyncButton
                    className={"btn btn-primary mr-1"}
                    onClick={() => console.log("Clicked")}
                >
                    Test 3
                </AsyncButton>
            </div>
        );
    }
}
