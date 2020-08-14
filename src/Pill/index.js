import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import useEventListener from '../hooks/useEventListener';

const Pill = ({ className, children, onDismiss, ...rest }) => {
  const hxRef = useEventListener({ onDismiss });
  return (
    <hx-pill class={className} {...rest} ref={hxRef} >
      {children}
    </hx-pill>
  );
};

Pill.propTypes = {
  persist: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Pill;
