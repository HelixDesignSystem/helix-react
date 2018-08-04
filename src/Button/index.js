import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function cssFor (modifier) {
    return {
        'large': 'hxLg',
        'primary': 'hxPrimary',
        'small': 'hxSm',
        'tertiary': 'hxTertiary',
    }[modifier];
}

function classNames (props) {
    return [
        'hxBtn', 
        cssFor(props.variant), 
        cssFor(props.size), 
        props.className,
    ].join(' ').trim();
}

class Button extends React.Component {
    render () {
        // destructure props for JSX composition
        const {
            busy,
            children, // explicity placed
            className, // removed to prevent duplicate prop
            headIcon,
            size,
            tailIcon,
            type,
            variant,
            ...props
        } = this.props;

        return (
            <button 
                className={classNames(this.props)}
                type={type || 'button'}
                {...props}
            >
                {headIcon && (<Icon type={headIcon} />)}
                {children && (<span>{children}</span>)}
                {busy ? (
                    <hx-busy></hx-busy>
                ) : (
                    tailIcon && (<Icon type={tailIcon}/>)
                )}
            </button>
        );
    }
}

Button.propTypes = {
    busy: PropTypes.bool,
    disabled: PropTypes.bool,
    headIcon: PropTypes.string,
    size: PropTypes.string,
    tailIcon: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
};

export default Button;
