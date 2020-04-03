import PropTypes from 'prop-types';
import React from 'react';

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
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-middle',
    'right-bottom',
    'bottom-right',
    'bottom-center',
    'bottom-left',
    'left-bottom',
    'left-middle',
    'left-top',
  ]),
};

Tooltip.defaultProps = {
  position: 'top-left',
};

export default Tooltip;