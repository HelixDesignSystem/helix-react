import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

const Checkbox = ({ id, label, indeterminate, ...rest }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <hx-checkbox-control>
      <input ref={inputRef} {...rest} id={id} type="checkbox" />
      <label htmlFor={id}>
        <hx-checkbox></hx-checkbox>
        {label}
      </label>
    </hx-checkbox-control>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
