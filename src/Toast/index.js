import React from 'react';
import PropTypes from 'prop-types';
import useEventListener from '../hooks/useEventListener';

const Toast = ({ onOpen, onClose, className, children, onDismiss, onSubmit, ...rest }) => {
  const hxRef = useEventListener({ onDismiss, onSubmit });
  return (
    <div> {/* Wrappping element needed: Otherwise when alert removes itself from DOM on close, it will cause error */}
      <hx-toast class={className} ref={hxRef} {...rest}>
        {children}
      </hx-toast>
    </div>
  );
};

Toast.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['info','error','success']),
  cta: PropTypes.string,
  onDismiss: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Toast;
