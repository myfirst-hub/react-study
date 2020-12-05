import React, { createContext, useContext } from 'react';

let nameContext = createContext({name: 'zhangsan'});
let ageContext = createContext({age: 24});

function UseContext() {
  let {name} = useContext(nameContext);
  let {age} = useContext(ageContext);

  return (
    <div>
      {name}{age}
    </div>
  )
}

export default UseContext;