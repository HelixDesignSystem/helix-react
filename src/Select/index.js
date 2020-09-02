import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Select = ({
  children,
  className,
  disabled,
  id,
  label,
  onChange,
  optional,
  required,
  style,
  ...rest
}) => {
  return (
    <hx-select-control class={className} style={style}>
      <select id={id} disabled={disabled} onChange={onChange} required={required} {...rest}>
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
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  optional: PropTypes.bool,
  required: PropTypes.bool,
};

export default Select;
