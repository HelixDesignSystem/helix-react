import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icons';

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

export class Button extends React.Component {
    static propTypes = {
        busy: PropTypes.bool,
        disabled: PropTypes.bool,
        tailIcon: PropTypes.string,
        headIcon: PropTypes.string,
        size: PropTypes.string,
        type: PropTypes.string,
        variant: PropTypes.string,
    }

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
