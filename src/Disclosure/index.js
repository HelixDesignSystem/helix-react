import React from 'react';
import PropTypes from 'prop-types';
import { wcBool } from '../utils';

const Disclosure = React.forwardRef(({ className, ariaControls, ariaExpanded, ...rest }, ref) => {
  return (
    <hx-disclosure
      ref={ref}
      class={className}
      aria-controls={ariaControls}
      aria-expanded={wcBool(ariaExpanded)}
      {...rest}
    />
  );
});

Disclosure.propTypes = {
  ariaControls: PropTypes.string.isRequired,
  ariaExpanded: PropTypes.bool,
  role: PropTypes.string,
  tabindex: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Disclosure.displayName = 'Disclosure';

export default Disclosure;
