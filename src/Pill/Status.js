import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const PILL_VARIANTS = {
  grey: 'hxEmphasisGray',
  purple: 'hxEmphasisPurple',
  subdued: 'hxSubdued',
};

const Status = ({ className, children, variant, filled, ...rest }) => {
  return (
    <hx-status class={classnames(className, PILL_VARIANTS[variant], { hxFill: filled })} {...rest}>
      {children}
    </hx-status>
  );
};

Status.propTypes = {
  variant: PropTypes.oneOf(Object.keys(PILL_VARIANTS)),
  filled: PropTypes.bool,
};

export default Status;
