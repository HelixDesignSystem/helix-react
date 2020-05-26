import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useEventListener from '../hooks/useEventListener';
import { POSITIONS } from '../constants';
import { wcBool } from '../utils';

const Popover = ({ onOpen, onClose, onReposition, className, open, children, relativeTo, ...rest }) => {
  const hxRef = useEventListener({ onOpen, onClose, onReposition });
  return (
    <hx-popover class={classNames(className)} ref={hxRef} open={wcBool(open)} relative-to={relativeTo} {...rest}>
      {children}
    </hx-popover>
  );
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.oneOf(POSITIONS),
  relativeTo: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onReposition: PropTypes.func,
};

export default Popover;
