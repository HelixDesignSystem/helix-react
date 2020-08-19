import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

const Checkbox = ({ id, label, indeterminate, className, ...rest }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <hx-checkbox-control class={className}>
      <input ref={inputRef} {...rest} id={id} type="checkbox" />
      <label htmlFor={id}>
        <hx-checkbox></hx-checkbox>
        {label}
      </label>
    </hx-checkbox-control>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
