import PropTypes from 'prop-types';
import React from 'react';
import { POSITIONS } from '../constants';

const Tooltip = ({ children, id, position }) => {
  return (
    <hx-tooltip for={id} position={position}>
      {children}
    </hx-tooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  position: PropTypes.oneOf(POSITIONS),
};

Tooltip.defaultProps = {
  position: 'top-left',
};

export default Tooltip;
