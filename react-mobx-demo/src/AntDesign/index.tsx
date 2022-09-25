
import React, { Fragment } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import { ConfigProvider, DatePicker, message } from 'antd';
import moment, { Moment } from 'moment';
import 'moment/locale/zh-cn';
import { Observer, useLocalObservable } from 'mobx-react-lite';
import { action, autorun } from 'mobx';

// import AntdComponent from './Table/TableComponent';
import AntdComponent from './Table/FormComponent';
import Button from 'antd/es/button';

moment.locale('zh-cn');

const App = () => {
  const observerObj = useLocalObservable(() => ({
    date: null,
    visible: false,
    setDate: (value: Moment) => {
      observerObj.date = value;
    }
  }))

  const handleChange = (value: Moment) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    observerObj.setDate(value);
  };

  console.log('observerObj.visible..................', observerObj.visible)
  autorun(() => {
    console.log('observerObj.visible.....autorun........', observerObj.visible)
  })
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: '80%', margin: '100px auto', textAlign: 'center' }}>
        <Observer>
          {() => (
            <Fragment>
              <DatePicker onChange={handleChange} />
              <div style={{ marginTop: 16 }}>
                当前日期：{observerObj.date ? observerObj.date.format('YYYY年MM月DD日') : '未选择'}
              </div>
            </Fragment>
          )}
        </Observer>
        <Observer>
          {() => (
            !!observerObj.visible && <AntdComponent />
          )}
        </Observer>
        <Button onClick={action((e) => {
          console.log('e...............', e)
          console.log(observerObj.visible)
          observerObj.visible = !observerObj.visible;
        })}>
          按钮
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default App;
