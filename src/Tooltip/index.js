import PropTypes from 'prop-types';
import React from 'react';

import positions from './positions.js';

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
  position: PropTypes.oneOf(positions),
};

Tooltip.defaultProps = {
  position: 'top-left',
};

export default Tooltip;
