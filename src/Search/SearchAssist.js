import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import Search from './index';
import SearchAssistance from './SearchAssistance';
import { wcBool } from '../utils';
import { POSITIONS } from '../constants';
import useClickOutside from 'use-onclickoutside';

/**
 * @see https://helixdesignsystem.github.io/helix-ui/components/search/
 */
const SearchAssist = ({ children, onFocus, onBlur, position, ...rest }) => {
  const [open, setOpen] = useState(false);
  const searchRef = useRef();
  useClickOutside(searchRef, (e) => setOpen(false));

  return (
    <div ref={searchRef}>
      <Search
        {...rest}
        onFocus={(e) => {
          setOpen(true);
          onFocus && onFocus(e);
        }}
        wrapperId={`${rest.id}-hx-search-control`}
      />
      <SearchAssistance
        relativeTo={`${rest.id}-hx-search-control`}
        open={wcBool(open)}
        position={position}
        onClick={() => setOpen(false)}
      >
        {children}
      </SearchAssistance>
    </div>
  );
};

SearchAssist.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(POSITIONS),
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

export default SearchAssist;
