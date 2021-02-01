import PropTypes from 'prop-types';
import React from 'react';

const Radio = React.forwardRef(({ id, label, className, style, ...rest }, ref) => {
  return (
    <hx-radio-control class={className} style={style} ref={ref}>
      <input {...rest} id={id} type="radio" />
      <label htmlFor={id}>
        <hx-radio></hx-radio>
        {label}
      </label>
    </hx-radio-control>
  );
});

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Radio.displayName = 'Radio';
export default Radio;
