/**
 * 这是action的构建函数
 * */ 

 const sendAction = () => {
   //我们需要返回一个 action对象
   return {
     type: 'send_type',
     value: '我是一个action'
   }
 }

 module.exports = {
  sendAction,
 }