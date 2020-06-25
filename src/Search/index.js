import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import { wcBool } from '../utils';

/**
 * @see https://helixdesignsystem.github.io/helix-ui/components/search/
 */
const Search = ({
  children,
  disabled,
  id,
  label,
  className,
  clearLabel,
  onClear,
  optional,
  required,
  wrapperId,
  ...rest
}) => {
  return (
    <hx-search-control class={className} id={wrapperId}>
      <input id={id} {...rest} disabled={wcBool(disabled)} type="search" />
      <button type="button" className="hxClear" aria-label={clearLabel} hidden onClick={onClear}>
        <Icon type="times" />
      </button>
      <hx-search></hx-search>
      {label && (
        <label
          className={classnames({
            hxOptional: optional,
            hxRequired: required,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </hx-search-control>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  clearLabel: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  wrapperId: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  optional: PropTypes.bool,
  required: PropTypes.bool,
};

Search.defaultProps = {
  clearLabel: 'Clear search',
};

export default Search;
