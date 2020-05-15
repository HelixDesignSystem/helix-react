import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { SIZES } from '../constants';
import { wcBool } from '../utils';

const Drawer = ({ children, className, id, open, size, ...rest }) => {
  return (
    <hx-drawer class={(className, SIZES[size])} id={id} open={wcBool(open)} {...rest}>
      {children}
    </hx-drawer>
  );
};

Drawer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool,
  size: PropTypes.oneOf(SIZES),
};

Drawer.defaultProps = {
  open: null,
};

export default Drawer;
