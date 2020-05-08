import React from 'react';
import HelixUI from 'helix-ui';
import PropTypes from 'prop-types';

export const Icons = Object.keys(HelixUI.Utils.ICONS);

const Icon = ({ type, ...rest }) => {
  return <hx-icon type={type} {...rest}></hx-icon>;
};

Icon.propTypes = {
  type: PropTypes.string,
};

export default Icon;
