import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { SIZES } from '../constants';
import { wcBool } from '../utils';

const ChoiceTile = ({
  checked,
  children,
  className,
  disabled,
  icon,
  id,
  invalid,
  onChange,
  size,
  subdued,
  title,
  ...rest
}) => {
  return (
    <label className={classNames({ hxChoice: true, className })}>
      <input
        checked={wcBool(checked)}
        disabled={disabled}
        invalid={invalid?.toString()}
        name={id}
        type="radio"
      />
      <hx-tile class={classNames({ hxSubdued: subdued, [SIZES[size]]: true })} {...rest}>
        <hx-icon type="checkmark"></hx-icon>
        {icon && (
          <div className="hx-tile-icon">
            <hx-icon type={icon}></hx-icon>
          </div>
        )}
        <header>{title}</header>
        {children}
      </hx-tile>
    </label>
  );
};

ChoiceTile.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(SIZES),
  subdued: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

ChoiceTile.defaultProps = {
  checked: false,
};

export default ChoiceTile;
