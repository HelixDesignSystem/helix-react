import React from 'react';
import PropTypes from 'prop-types';
import useEventListener from '../hooks/useEventListener';

const Alert = ({ onOpen, onClose, className, children, onDismiss, onSubmit, ...rest }) => {
  const hxRef = useEventListener({ onDismiss, onSubmit });
  return (
    <div>
      {/* Wrappping element needed: Otherwise when alert removes itself from DOM on close, it will cause error */}
      <hx-alert class={className} ref={hxRef} {...rest}>
        {children}
      </hx-alert>
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  status: PropTypes.string,
  cta: PropTypes.string,
  persist: PropTypes.bool,
  onDismiss: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Alert;
