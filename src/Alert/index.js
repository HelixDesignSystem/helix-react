import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

const TYPES = {
  'default': '',
  info: 'info',
  error: 'error',
  success: 'success',
  warning: 'warning'
};

class Alert extends PureComponent {
  componentDidMount() {
    if (this.hxRef) {
      this.hxRef.addEventListener('submit', this.props.onSubmit);
      this.hxRef.addEventListener('dismiss', this.props.onDismiss);
    }
  }
  componentWillUnmount() {
    if (this.hxRef) {
      this.hxRef.removeEventListener('submit', this.props.onSubmit);
      this.hxRef.removeEventListener('dismiss', this.props.onDismiss);
    }
  }

  setRef = (element) => { this.hxRef = element; };

  render() {
    const { content, className, children, type = 'default', status, cta, ...rest } = this.props;
    return (
      <div>
        {/* Needed div: Otherwise alert removes itself from DOM on close, confusing react if its the parent element */}
        <hx-alert
          type={TYPES[type]}
          status={status}
          cta={cta}
          class={className}
          ref={this.setRef}
          {...rest}
        >
          {' '}{content || children}
        </hx-alert>
      </div>
    );
  }
}

Alert.propTypes = {
  contentOrChildrenRequired: props => (
    (!props.content && !props.children) &&
    new Error('Must have either content or children props defined')
  ),
  content: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  status: PropTypes.string,
  cta: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired
};

Alert.defaultProps = {
  onSubmit: undefined,
  onDismiss: undefined
};

export default Alert;
