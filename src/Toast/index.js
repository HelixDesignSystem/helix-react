import React from 'react';
import PropTypes from 'prop-types';
import useEventListener from '../hooks/useEventListener';

const Toast = React.forwardRef(
  ({ onOpen, onClose, className, children, onDismiss, onSubmit, ...rest }, ref) => {
    const hxRef = useEventListener({ onDismiss, onSubmit }, ref);
    return (
      <div>
        {/* Wrapping element needed: Otherwise when hx-toast removes itself from DOM on close, it will cause error */}
        <hx-toast class={className} ref={hxRef} {...rest}>
          {children}
        </hx-toast>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

Toast.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['info', 'error', 'success']),
  cta: PropTypes.string,
  onDismiss: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Toast;
