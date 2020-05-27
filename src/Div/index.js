import React from 'react';
import PropTypes from 'prop-types';

const Div = ({ className, ...rest }) => {
  return <hx-div class={className} {...rest} />;
};

Div.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  scroll: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
};

export default Div;
