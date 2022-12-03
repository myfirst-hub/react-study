import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import './index.css';

const Example = () => {
  const [state, setState] = useState({
    width: 200,
    height: 200,
  });

  // On top layout
  const onResize = (event: any, {element, size, handle}: any) => {
    setState({width: size.width, height: size.height});
  };

  return (
    <Resizable
      height={state.height}
      width={state.width}
      axis="x"
      resizeHandles={['ne', 'n', 'e']}
      onResize={onResize}>
      <div className="box" style={{width: state.width + 'px', height: state.height + 'px'}}>
        <span>Contents</span>
      </div>
    </Resizable>
  );
}

export default Example;