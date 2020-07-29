import PropTypes from 'prop-types';
import React from 'react';

const Radio = ({ id, label, className, ...rest }) => {
  return (
    <hx-radio-control>
      <input {...rest} id={id} type="radio" />
      <label htmlFor={id}>
        <hx-radio></hx-radio>
        {label}
      </label>
    </hx-radio-control>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Radio;
