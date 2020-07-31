import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const TextArea = ({ id, label, containerClass, required, optional, children, ...rest }) => {
  return (
    <hx-textarea-control class={containerClass}>
      <textarea {...rest} id={id} required={required} />
      <label
        className={classnames({
            hxOptional: optional,
            hxRequired: required
        })}
        htmlFor={id}
      >
        {label}
      </label>
      {children}
    </hx-textarea-control>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  optional: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
