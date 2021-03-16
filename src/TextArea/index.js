import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const TextArea = React.forwardRef(
  (
    { id, label, className, required, disabled, optional, invalid, children, style, ...rest },
    ref
  ) => {
    return (
      <hx-textarea-control
        class={classnames(className, { hxInvalid: invalid })}
        style={style}
        ref={ref}
      >
        <textarea {...rest} id={id} required={required} disabled={disabled} />
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
        {children}
      </hx-textarea-control>
    );
  }
);

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  optional: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
