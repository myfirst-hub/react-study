import React, { Profiler } from "react";
import lodash from 'lodash';
import moment from 'moment';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, name: "wangwu" };
  }

  editName() {
    console.log("editName");
    console.log("this.state................", this.state);
    // 此时是异步
    this.setState({ name: "zhangsan" });
    console.log("this.state000000................", this.state);
    // 此时是同步
    setTimeout(() => {
      console.log("this.state................", this.state);
      this.setState({ name: "lisi" });
      console.log("this.state1111................", this.state);
    }, 3000);
    // this.state.name = "zhangsan";
    // console.log('this.state...............', this.state);
  }
  callback(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions){
    // console.log('id...................', id);
    // console.log('phase...................', phase);
    // console.log('actualDuration...................', actualDuration);
    // console.log('baseDuration...................', baseDuration);
    // console.log('startTime...................', startTime);
    // console.log('commitTime...................', commitTime);
    // console.log('interactions...................', interactions);
  }

  render() {
    // console.log(`${moment(1616405140000).hours()}:${moment(1616405140000).minutes()}`);
    console.log(`${moment(1616505140000).hours()}:${moment(1616505140000).minutes()}`);
    console.log(`${moment(1616505140000).format('YYYY-MM-DD  HH:mm')}`);
    // console.log(moment().endOf('day'));
    // console.log(moment().subtract('days', 1).endOf('day'));
    // console.log(moment().startOf('day').valueOf());
    // console.log(moment().year());
    // console.log(moment().get('month'))
    var array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'left', 'code': 100 }
    ];

    console.log('keyby.................', lodash.keyBy(array, 'dir'))

    var fruits = ['Apple', 'Banana', 'Orange', 'Celery'];
    lodash.remove(fruits, function (fruit) {
      return fruit === 'Apple';
    })

    console.log('fruits....................', fruits);

    var arrayTest = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

    const getRepeatArray = lodash.intersectionWith(arrayTest, [{ 'x': 1 }, { 'x': 3 }], (a,b) => {
      console.log('a............', a);
      console.log('b............', b);
      // return 'x';
      return a.x === b.x;
    });
    console.log('getRepeatArray.............', getRepeatArray)

    var users = [
      { 'user': 'barney',  'age': 36 },
      { 'user': 'fred',    'age': 40 },
      { 'user': 'pebbles', 'age': 1 }
    ];

    var youngest = lodash
      .chain(users)
      .sortBy('age')
      .map(function(o) {
        return o.user + ' is ' + o.age;
      })
      .head()
      .value();

    console.log('youngest...................', lodash.sortBy(users, 'age'));

    console.log('chain.............', lodash.chain(users).keyBy('user').mapValues('age').value())

    if (this.state.liked) {
      return "You liked this.";
    }
    let name = "zhangsan";
    this.name = name;
    return (
      <div>
        parent
        <div>
          child
          <Profiler id="Panel" onRender={this.callback}>
            <Like name={this.state.name} editName={this.editName.bind(this)} />
          </Profiler>
        </div>
      </div>
    );
  }
}

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    let { name } = this.props;
    console.log("name...............", name);
    return (
      <div>
        {name}
        <button onClick={this.props.editName}>改名</button>
      </div>
    );
  }
}

export default App;

// export let App1 ={
//   a:1,
//   b:2,
// }
