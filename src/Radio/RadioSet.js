import PropTypes from 'prop-types';
import React from 'react';

const RadioSet = ({ className, children, ...rest}) => {
  return (
    <hx-radio-set class={className} {...rest}>
      {children}
    </hx-radio-set>
  );
};

RadioSet.propTypes = {
  children: PropTypes.node,
};

export default RadioSet;
