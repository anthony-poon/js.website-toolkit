import React from "react"
import PropTypes from "prop-types"
import "./index.scss"

export default class SpinnerDiv extends React.Component {
    render() {
        return (
            <div className={"async-div__wrapper " + (this.props.className)}>
                {
                    this.props.in ? null : (
                        <div className={"async-div__popover "}>
                            <span className="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"/>
                        </div>
                    )
                }
                {this.props.children}
            </div>
        );
    }
}

SpinnerDiv.defaultProps = {
    className: ""
};

SpinnerDiv.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    in: PropTypes.bool.isRequired
};
