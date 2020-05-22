import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useEventListener from '../hooks/useEventListener';
import { POSITIONS } from '../constants';
import { wcBool } from '../utils';

const Popover = ({ onOpen, onClose, onReposition, className, open, children, ...rest }) => {
  const hxRef = useEventListener({ onOpen, onClose, onReposition });
  return (
    <hx-popover class={classNames(className)} ref={hxRef} open={wcBool(open)} {...rest}>
      {children}
    </hx-popover>
  );
};

Popover.propTypes = {
  id: PropTypes.string,
  position: PropTypes.oneOf(POSITIONS),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onReposition: PropTypes.func,
};

export default Popover;
