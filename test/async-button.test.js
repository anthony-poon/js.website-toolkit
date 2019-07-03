import React from "react";
import renderer from 'react-test-renderer';
import {AsyncButton} from "website-toolkit"

test("Render Test", () => {
    const component = renderer.create(
        <AsyncButton>Testing</AsyncButton>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
