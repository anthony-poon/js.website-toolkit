import React from "react";
import renderer from 'react-test-renderer';
import {SpinnerDiv} from "website-toolkit"

test("Render Test", () => {
    const inDiv = renderer.create(
        <SpinnerDiv in={true}>Testing</SpinnerDiv>
    );
    let tree = inDiv.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    const outDiv = renderer.create(
        <SpinnerDiv in={false}>Testing</SpinnerDiv>
    );
    // re-rendering
    tree = outDiv.toJSON();
    expect(tree).toMatchSnapshot();
});
