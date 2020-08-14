import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { SIZES } from '../constants';
import useEventListener from '../hooks/useEventListener';
import { wcBool } from '../utils';

const Drawer = ({ children, className, id, onClose, onOpen, open, size, ...rest }) => {
  const hxRef = useEventListener({ onOpen, onClose });
  return (
    <hx-drawer
      class={classnames(className, SIZES[size])}
      id={id}
      open={wcBool(open)}
      ref={hxRef}
      {...rest}
    >
      {children}
    </hx-drawer>
  );
};

Drawer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Drawer.defaultProps = {
  open: null,
};

export default Drawer;
