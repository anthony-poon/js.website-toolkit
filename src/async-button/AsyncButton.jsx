import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import "./index.scss";
export default class AsyncButton extends React.Component {
    state = {
        isRunning: false,
        unhandledError: false
    };

    async handleClick(evt) {
        this.setState({
            isRunning: true
        });
        const duration = this.props.duration;
        const onClick = this.props.onClick ?? (() => {});
        const onFinish = this.props.onFinish ?? (() => {});
        const onError = this.props.onError ?? ((error) => {
            console.error(error);
            this.setState({
                unhandledError: true
            });
        });
        // Wait for onClick finish AND this.props.duration sec passed
        try {
            const rtn = await Promise.all([
                onClick(evt),
                new Promise(((resolve) => {
                    setTimeout(resolve, duration);
                }))
            ])
            this.setState({
                isRunning: false
            }, () => {
                onFinish(rtn[0]);
            });
        } catch (e) {
            onError(e);
            this.setState({
                isRunning: false
            });
        }
    }

    renderDisplay() {
        const { unhandledError, isRunning } = this.state;
        if (unhandledError) {
            return (
                <span>
                    <FontAwesomeIcon icon={faExclamationCircle}/>
                </span>
            )
        } else if (isRunning) {
            return (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
            )
        } else {
            return (
                this.props.children
            )
        }
    }

    render() {
        const { onClick, onFinish, children, ...rest } = this.props;
        return (
            <button
                type="button"
                {...rest}
                onClick={this.handleClick.bind(this)}
                disabled={this.state.unhandledError || this.state.isRunning}
            >
                {
                    this.renderDisplay()
                }
            </button>
        );
    }
}

AsyncButton.defaultProps = {
    duration: 1500
};

AsyncButton.propTypes = {
    duration: PropTypes.number,
    onClick: PropTypes.func,
    onFinish: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};
