import React, { useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
    const hxRef = useRef(null);

    useEffect(() => {
        hxRef.current.addEventListener('open', props.onOpen);
        hxRef.current.addEventListener('close', props.onClose);
        return () => {
            hxRef.current.removeEventListener('open', props.onOpen);
            hxRef.current.removeEventListener('close', props.onClose);
        };
    }, []);

    return (
        <>
            {/*
                 Wrappping element needed: Otherwise when alert removes itself from DOM on close it confusing React
                 about where highest level parent element went, and will throw an error.
             */}
            <hx-alert
                type={props.type}
                status={props.status}
                persist={props.persist}
                cta={props.cta}
                className={props.className}
                id={props.id}
                ref={hxRef}
            >
                {' '}{props.children}
            </hx-alert>
        </>
    );
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string,
    status: PropTypes.string,
    cta: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
};

export default Alert;
