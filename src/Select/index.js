import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Select = React.forwardRef(
  (
    { children, className, disabled, id, label, onChange, optional, required, style, ...rest },
    ref
  ) => {
    return (
      <hx-select-control class={className} style={style} ref={ref}>
        <select id={id} disabled={disabled} onChange={onChange} required={required} {...rest}>
          {children}
        </select>
        <hx-select></hx-select>
        {typeof label === 'undefined' && (
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
  }
);

Select.displayName = 'Select';

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
