import React from "react"
import PropTypes from "prop-types";
import Gist from "react-gist";

export default class ExampleView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.description}
                </div>
                <Gist id={this.props.gistId}/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ExampleView.propTypes = {
    description: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    gistId: PropTypes.string.isRequired
};
