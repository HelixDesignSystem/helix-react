import React from 'react';
/**
 * Identical to React.useEffect, except that it never runs on mount. This is the equivalent of
 * the componentDidUpdate lifecycle function.
 * @see https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
 * @param {function:function} effect - A useEffect effect.
 * @param {array} dependencies - useEffect dependency list.
 */
export const useEffectExceptOnMount = (effect, dependencies) => {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) {
      const unmount = effect();
      return () => unmount && unmount();
    } else {
      mounted.current = true;
    }
  }, dependencies);

  React.useEffect(() => {
    return () => (mounted.current = false);
  }, []);
};
