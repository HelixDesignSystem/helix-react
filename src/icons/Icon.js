import React from 'react';
import PropTypes from 'prop-types';

export class Icon extends React.Component {
    static propTypes = {
        type: PropTypes.string,
    }

    render () {
        const {
            type,
            ...props
        } = this.props;

        return (
            <hx-icon
                type={type}
                {...props}
            ></hx-icon>
        );
    }
}
