import React from 'react';
import PropTypes from 'prop-types';

const Disclosure = ({ className, ariaControls, ariaExpanded, ...rest }) => {
  return (
    <hx-disclosure
      class={className}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      {...rest}
    />
  );
};

Disclosure.propTypes = {
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.string,
  role: PropTypes.string,
  tabindex: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Disclosure;
