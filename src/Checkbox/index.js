import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import useCombinedRefs from '../hooks/useCombinedRefs';

const Checkbox = React.forwardRef(
  ({ id, label, indeterminate, className, style, ...rest }, ref) => {
    const hxRef = useCombinedRefs(ref, useRef());
    useEffect(() => {
      hxRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    return (
      <hx-checkbox-control class={className}>
        <input ref={hxRef} {...rest} id={id} type="checkbox" />
        <label htmlFor={id}>
          <hx-checkbox></hx-checkbox>
          {label}
        </label>
      </hx-checkbox-control>
    );
  }
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
