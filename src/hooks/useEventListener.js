import { useEffect, useRef } from 'react';
import useCombinedRefs from './useCombinedRefs';
const handlerNameToEvent = (handlerName) => handlerName.replace(/^on/, '').toLowerCase();

/**
 * Adds event handlers like onOpen or onClose to event listeners: 'open' or 'close'
 * @param {object} eventHandlers such as onClose, onOpen, ...etc
 * @param {React.MutableRefObject} ref
 * @return {React.MutableRefObject}
 */
function useEventListener(eventHandlers = {}, ref) {
  const theRef = ref ? useCombinedRefs(ref, useRef(null)) : useRef(null);

  useEffect(() => {
    Object.entries(eventHandlers).forEach(([handlerName, eventHandler]) => {
      theRef.current.addEventListener(handlerNameToEvent(handlerName), eventHandler);
    });
    return () => {
      Object.entries(eventHandlers).forEach(([handlerName, eventHandler]) => {
        theRef.current.removeEventListener(handlerNameToEvent(handlerName), eventHandler);
      });
    };
  }, []);
  return theRef;
}
export default useEventListener;
