import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import useEventListener from '../hooks/useEventListener';

const Progress = ({ className, children, value, ...rest }) => {
  return <hx-progress class={className} {...rest} value={value.toString()}></hx-progress>;
};

Progress.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
};

export default Progress;
