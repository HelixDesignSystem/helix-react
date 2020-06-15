import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Search from './index';
import SearchAssistance from './SearchAssistance';
import { wcBool } from '../utils';
import { POSITIONS } from '../constants';

/**
 * @see https://helixdesignsystem.github.io/helix-ui/components/search/
 */
const SearchAssist = ({ children, onFocus, onBlur, position, ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Search
        {...rest}
        onFocus={(e) => {
          setOpen(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setOpen(false);
          onBlur && onBlur(e);
        }}
        wrapperId={`${rest.id}-hx-search-control`}
      />
      <SearchAssistance
        relativeTo={`${rest.id}-hx-search-control`}
        open={wcBool(open)}
        position={position}
      >
        {children}
      </SearchAssistance>
    </>
  );
};

SearchAssist.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(POSITIONS),
};

export default SearchAssist;
