import React, { useState, useEffect } from 'react';
import { Button } from 'antd';


import HelloClass from './HelloClass';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (count > 5) {
      setText('Take a break!');
    }
  }, [count])

  return (
    <>
      <p>You have clicked {count} {count === 1 ? 'time.' : 'times.'} {text}</p>
      <Button
        onClick={() => { setCount(count + 1) }}
      >
        Hello {props.name}
      </Button>
    </>
  );
}

HelloHooks.defaultProps = {
  name: '',
  firstName: '',
  lastName: ''
}

export default HelloHooks;