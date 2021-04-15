import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Password = React.forwardRef(
  ({ id, label, invalid, className, required, children, style, placeholder, ...rest }, ref) => {
    return (
      <hx-password-control
        class={classnames(className, { hxInvalid: invalid })}
        style={style}
        ref={ref}
      >
        <input {...rest} id={id} required={required} placeholder={placeholder} type="password" />
        {label && (
          <label
            className={classnames({
              hxRequired: required,
            })}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {children}
      </hx-password-control>
    );
  }
);

Password.displayName = 'Password';

Password.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Password;
