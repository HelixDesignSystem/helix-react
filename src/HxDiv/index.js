import React from 'react';
import PropTypes from 'prop-types';

const HxDiv = ({ className, ...rest }) => {
  return <hx-div class={className} {...rest} />;
};

HxDiv.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  scroll: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
};

export default HxDiv;
