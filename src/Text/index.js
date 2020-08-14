import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Text = ({ id, label, className, required, optional, children, prefix, suffix, ...rest }) => {
  return (
    <hx-text-control class={className}>
      <input {...rest} id={id} required={required} type="text" />
      <label
        className={classnames({
          hxOptional: optional,
          hxRequired: required,
        })}
        htmlFor={id}
      >
        {label}
      </label>

      {prefix && <span className="hxPrefix">{prefix}</span>}
      {suffix && <span className="hxSuffix">{suffix}</span>}
      {children}
    </hx-text-control>
  );
};

Text.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  optional: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func,
};

export default Text;
