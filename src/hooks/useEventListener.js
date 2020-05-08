import { useEffect, useRef } from 'react';

const handlerNameToEvent = (handlerName) => handlerName.replace(/^on/,'').toLowerCase();

/**
 * maps event handlers like onOpen or onClose to event listeners: 'open' or 'close'
 * @param {object} eventHandlers such as onClose, onOpen, ...etc
 * @param {React.MutableRefObject} ref
 * @return {React.MutableRefObject}
 */
function useEventListener(eventHandlers = {}, ref) {
    const theRef = ref || useRef(null);
    useEffect(() => {
        Object.entries(eventHandlers).forEach(([handlerName, eventHandler] , key) => {
            theRef.current.addEventListener(
                handlerNameToEvent(handlerName),
                eventHandler
            );
        });
        return () => {
            Object.entries(eventHandlers).forEach(([handlerName, eventHandler] , key) => {
                theRef.current.addEventListener(
                    handlerNameToEvent(handlerName),
                    eventHandler
                );
            });
        };
    }, []);
    return theRef;
}
export default useEventListener;
