// 全局引入样式
// import '../style.css';
const Apps = ({Component, pageProps}) => {
  // console.log('Component...................', Component);
  // console.log('pageProps...................', pageProps);
  return <Component {...pageProps}/>;
}

export default Apps;