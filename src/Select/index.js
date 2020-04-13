import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Select = ({
  children,
  disabled,
  id,
  label,
  onChange,
  optional,
  required,
  ...rest
}) => {
  return (
    <hx-select-control>
      <select
        id={id}
        disabled={disabled}
        onChange={onChange}
        required={required}
        {...rest}
      >
        {children}
      </select>
      <hx-select></hx-select>
      {label && (
        <label
          className={classnames({
            hxOptional: optional,
            hxRequired: required,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </hx-select-control>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  optional: PropTypes.bool,
  required: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  optional: false,
  required: false,
};

export default Select;