import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Text = ({
  id,
  label,
  containerClass,
  required,
  optional,
  children,
  prefix,
  suffix,
  ...rest
}) => {
  return (
    <hx-text-control class={containerClass}>
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
  containerClass: PropTypes.string,
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
