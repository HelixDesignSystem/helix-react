import React from 'react';
import HelixUI from 'helix-ui';
import PropTypes from 'prop-types';

export const Icons = Object.keys(HelixUI.Utils.ICONS);

const Icon = ({ type, className, ...rest }) => {
  return <hx-icon type={type} {...rest} class={className} />;
};

Icon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
