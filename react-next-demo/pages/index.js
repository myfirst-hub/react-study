import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
// 模块引入样式
// import css from "./index.module.css";
import less from '../styles.less';


const Index = () => {
  const router = useRouter();

  // router参数的接收
  console.log("router.query...................", router.query);

  const fn = () => {
    router.push({ pathname: "/about", query: { abc: "123" } });
  };

  return (
    <div>
      <Link href="./list">
        <a>list</a>
      </Link>
      <br />
      <Link href={{ pathname: "./about", query: { name: "456" } }}>
        <a>about</a>
      </Link>
      <br />
      {/* 第一种js编程跳转 */}
      <button onClick={() => Router.push("./about")}>Router</button>
      <br />
      {/* 第二种js编程跳转 */}
      <button onClick={fn}>useRouter</button>
      {/* <h2 className={css.color}> Hello World </h2> */}
      <h2 style={{ color: "green" }}> 内联样式 </h2>
      <p>jsx</p>
      {/* less和css不可以共用 */}
      <h2 className={less.size}> index </h2>
      <img src="980.jpg" />
      <style jsx>
        {`
          p {
            color: blue;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
