import React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface State {
  count: number
}

class HelloClass extends React.Component<Greeting, State> {
  state: State = {
    count: 0
  }

  static defaultProps = {
    firstName: '',
    lastName: ''
  }

  render() {
    return (
      <>
        <p>you have clicked {this.state.count} {this.state.count === 1 ? 'time' : 'times'}</p>
        <Button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Hello {this.props.name}
        </Button>
      </>
    );
  }
};

export default HelloClass;
