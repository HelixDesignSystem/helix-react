import PropTypes from 'prop-types';
import React from 'react';

// Storybook story lives in /Progress folder
const Busy = ({ className, children, ...rest }) => {
  return <hx-busy class={className} {...rest}></hx-busy>;
};

Busy.propTypes = {
  paused: PropTypes.bool,
  className: PropTypes.string,
};

export default Busy;
