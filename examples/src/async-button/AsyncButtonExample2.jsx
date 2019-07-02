import React from "react"
import Gist from "react-gist";
import AsyncButton from "website-toolkit/index";

export default class AsyncButtonExample1 extends React.Component{
    render() {
        return (
            <div className={"mb-5"}>
                <p>
                    When an async <span className={"text-info"}>onClick</span> function is provided, the button will wait until the function is finished.
                </p>
                <Gist id={"d96823f2253cdb6a864b554f991f293c"}/>
                <h5 className="mb-3">Preview:</h5>
                <AsyncButton
                    className={"btn btn-primary"}
                    onClick={async () => {
                        // Running an async function / promise that take 5 seconds to finish
                        // The button cannot be clicked until it is completed
                        const p = new Promise(resolve => setTimeout(() => resolve("Awake"), 5000));
                        console.log(await p);
                    }}
                >
                    Test
                </AsyncButton>
            </div>
        );
    }
}
