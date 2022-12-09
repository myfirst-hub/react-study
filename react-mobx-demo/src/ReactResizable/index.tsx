import React, { useState } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';
import './index.css';

const Example = () => {
  const [state, setState] = useState({
    width: 300,
    height: 200,
  });

  const [height, setHeight] = useState<number>(300);

  // On top layout
  const onResize = (event: any, {element, size, handle}: any) => {
    setState({width: size.width, height: size.height});
  };

  const onResizeHeight = (event: React.SyntheticEvent<Element, Event>, {node, size, handle}: ResizeCallbackData) => {
    console.log('event..............', event);
    console.log('node..............', node);
    console.log('size..............', size);
    console.log('handle..............', handle);
    setHeight(size.height);
  }

  console.log('height..............', height);

  return (
    <div style={{ display: 'flex' }}>
      <Resizable
        width={state.width}
        axis="x"
        resizeHandles={['e']}
        onResize={onResize}
        minConstraints={[300, Infinity]}
        maxConstraints={[600, Infinity]}
      >
        <div className="box" style={{width: state.width + 'px'}}>
          {/* <h1>Type selectors</h1> */}
          <p>Veggies es bonus vobis, proinde vos postulo essum magis <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo
              melon azuki bean garlic.</p>

          <p>Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
              greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>

          <p>Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce kohlrabi amaranth water spinach avocado
              daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach
          </p>
        </div>
      </Resizable>
      <div style={{ width: `calc(100vw - ${state.width}px)`}}>
        <div style={{ height: `calc(100vh - ${height}px)`}}>1</div>
        <div>
          <Resizable
            height={height}
            axis="y"
            resizeHandles={['n']}
            onResize={onResizeHeight}
            minConstraints={[Infinity, 100]}
            maxConstraints={[Infinity, 600]}
          >
            <div className='verticalBox' style={{height: height + 'px'}}>
              <div className='descendant'> {/** 空格 后代选择器*/}
                <ul>
                  <li>
                    <div>Item 1</div>
                    <ul>
                      <li>Subitem A</li>
                      <li>Subitem B</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className=''>
                <div>
                  <span>Span 1. In the div.
                    <span>Span 2. In the span that's in the div.</span>
                  </span>
                </div>
                <span>Span 3. Not in a div at all</span>
              </div>
              <div className='descendant'> {/** >子选择器*/}
                parent
                <div>1</div>
                <div>
                  2
                  <div>2-1</div>
                </div>
              </div>
            </div>
          </Resizable>
        </div>
      </div>
    </div>
  );
}

export default Example;