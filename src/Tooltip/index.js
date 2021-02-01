import PropTypes from 'prop-types';
import React from 'react';
import { POSITIONS } from '../constants';
import useEventListener from '../hooks/useEventListener';

const Tooltip = React.forwardRef(
  ({ children, id, position, onClose, onOpen, onReposition, ...rest }, ref) => {
    const hxRef = useEventListener({ onClose, onOpen, onReposition }, ref);
    return (
      <hx-tooltip for={id} position={position} ref={hxRef} {...rest}>
        {children}
      </hx-tooltip>
    );
  }
);

Tooltip.displayName = 'Tooltip';

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
