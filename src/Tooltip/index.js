import PropTypes from 'prop-types';
import React from 'react';
import { POSITIONS } from '../constants';
import useEventListener from '../hooks/useEventListener';

const Tooltip = ({ children, id, position, onClose, onOpen, onReposition, ...rest }) => {
  const hxRef = useEventListener({ onClose, onOpen, onReposition });
  return (
    <hx-tooltip for={id} position={position} ref={hxRef} {...rest}>
      {children}
    </hx-tooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  position: PropTypes.oneOf(POSITIONS),
  relativeTo: PropTypes.string,
  htmlFor: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'top-left',
};

export default Tooltip;
