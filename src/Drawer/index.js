import PropTypes from 'prop-types';
import React from 'react';

import { wcBool } from '../utils';

const Drawer = ({ children, className, id, label, open, ...rest }) => {
  return (
    <hx-drawer class={className} id={id} open={wcBool(open)} {...rest}>
      {children}
    </hx-drawer>
  );
};

Drawer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

Drawer.defaultProps = {
  open: null,
};

export default Drawer;
