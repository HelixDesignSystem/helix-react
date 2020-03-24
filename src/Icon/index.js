import React from 'react';
import HelixUI from 'helix-ui';
import PropTypes from 'prop-types';

export const Icons = Object.keys(HelixUI.Utils.ICONS);

class Icon extends React.Component {
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

// additional configs here
Icon.propTypes = {
    type: PropTypes.string,
};

export default Icon;
