import React from 'react';

import HelloClass from './HelloClass';

interface Loading {
  loading: boolean;
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <div>loading...</div> : <WrappedComponent {...props as P} />
    }
  } 
}

export default HelloHOC(HelloClass);