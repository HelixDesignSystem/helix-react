import PropTypes from 'prop-types';
import React from 'react';

const Breadcrumb = ({ children, icon = 'angle-right', ...rest }) => {
  // Automatically add delimiter
  const kids =
    children.length > 0
      ? children.map((child, index) => [
          child,
          index + 1 < children.length && <hx-icon class="delimiter" type={icon}></hx-icon>,
        ])
      : children;

  return (
    <nav className="hxBreadcrumb" {...rest}>
      {kids}
    </nav>
  );
};

Breadcrumb.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.func,
};

export default Breadcrumb;
