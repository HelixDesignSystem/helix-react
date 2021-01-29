import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Switch = React.forwardRef(({ id, className, onLabel, offLabel, invalid, ...rest }, ref) => {
  return (
    <hx-switch-control class={classnames('switch', className)} ref={ref}>
      <input type="checkbox" id={id} {...rest} invalid={invalid?.toString()} />
      <label htmlFor={id}>
        <hx-switch onlabel={onLabel} offlabel={offLabel} aria-labelledby={id} />
      </label>
    </hx-switch-control>
  );
});

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  onLabel: '',
  offLabel: '',
};

Switch.displayName = 'Switch';
export default Switch;
