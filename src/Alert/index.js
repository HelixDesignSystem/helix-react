import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useEventListener from '../hooks/useEventListener';
import useCombinedRefs from '../hooks/useCombinedRefs';

const Alert = React.forwardRef(
  ({ onOpen, onClose, className, children, onDismiss, onSubmit, ...rest }, ref) => {
    const hxRef = useEventListener({ onDismiss, onSubmit }, ref);
    return (
      <div>
        {/* Wrappping element needed: Otherwise when alert removes itself from DOM on close, it will cause error */}
        <hx-alert class={className} ref={hxRef} {...rest}>
          {children}
        </hx-alert>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

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
