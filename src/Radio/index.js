import PropTypes from 'prop-types';
import React from 'react';

const Radio = ({ id, label, className, ...rest }) => {
  return (
    <hx-radio-control class={className}>
      <input {...rest} id={id} type="radio" />
      <label htmlFor={id}>
        <hx-radio></hx-radio>
        {label}
      </label>
    </hx-radio-control>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Radio;
