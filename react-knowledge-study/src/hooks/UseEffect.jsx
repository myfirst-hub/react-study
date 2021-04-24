import React, { useState, useEffect } from "react";

function UseEffect(props) {
  let [data, setData] = useState({ count: 0, name: "zhang" });

  function loadData() {
    return fetch("api")
      .then((res) => res.json())
      .then((res) => {
        console.log("res............", res);
        return res;
      });
  }

  // 初始化和数据变更都执行
  useEffect(() => {
    console.log("componentDidMount+componentDidUpdate");
  });

  useEffect(() => {
    console.log("componentDidMount123");
  }, [data]);
  // 初始化执行
  // 如果数组[]里有值，若对应的值变更，则相应执行
  useEffect(() => {
    (async () => {
      let result = await loadData();
      console.log("result..................", result);
      setData((data) => ({ ...data, name: result.name }))
    })();
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    return () => {
      console.log("componentUnMount");
    };
  }, []);
  return (
    <>
      <div>{data.count}</div>
      <button onClick={() => setData((data) => ({ ...data, count: data.count + 1 }))}>
        click
      </button>
      <div>{data.name}</div>
    </>
  );
}

export default UseEffect;
