import React from 'react';
/**
 * @see https://laptrinhx.com/reusing-the-ref-from-forwardref-with-react-hooks-3215655428/
 * @param refs
 * @return {React.MutableRefObject}
 */
export default function useCombinedRefs(...refs) {
  const targetRef = React.useRef();

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
