import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useEventListener from '../hooks/useEventListener';
import { SIZES } from '../constants';
import { wcBool } from '../utils';

const Modal = React.forwardRef(
  ({ onOpen, onClose, className, open, size, children, ...rest }, ref) => {
    const hxRef = useEventListener({ onOpen, onClose }, ref);
    return (
      <hx-modal
        class={classNames(className, SIZES[size])}
        ref={hxRef}
        open={wcBool(open)}
        {...rest}
      >
        {children}
      </hx-modal>
    );
  }
);

Modal.displayName = 'Modal';

Modal.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default Modal;
