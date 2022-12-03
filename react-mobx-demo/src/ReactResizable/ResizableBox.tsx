import React from 'react';
import { ResizableBox } from 'react-resizable';
import './index';

class Example extends React.Component {
  render() {
    return (
      <ResizableBox
        width={200}
        height={200}
        draggableOpts={{}}
        minConstraints={[100, 100]}
        maxConstraints={[300, 300]}>
        <span>Contents</span>
      </ResizableBox>
    );
  }
}

export default Example;