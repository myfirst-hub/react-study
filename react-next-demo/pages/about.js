import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const About = ({ router }) => {
  // router参数的接收
  console.log("router.query...................", router.query);

  const fn = () => {
    router.push("./?abc=789");
  };
  return (
    <>
      <Link href="./">
        <a>index</a>
      </Link>
      <h2> about </h2>
      {/* 第三种js编程跳转 */}
      <button onClick={fn}>withRouter</button>
    </>
  );
};

export default withRouter(About);
