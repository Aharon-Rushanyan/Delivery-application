import React from "react";

import PrintWork from "./Components/printWork/PrintWork"
// import Map from "./Components/Map/Map"
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workList: [
        { id: 2, adress: "109/8 A. Mikoyan Str. 4th Block of Davitashen, 0054 Yerevan, Republic of Armenia", when: "09:00-11:00", estimatedTime: '08.15', barcode: "1222222", done: false, open: false, time: "" },
        { id: 10, adress: "smth", when: "09:00-11:00", estimatedTime: '08.15', barcode: "1111111", done: false, open: false, time: "" },
        { id: 3, adress: "smth", when: "21:00-24:00", barcode: "1333333", estimatedTime: '08.15', done: false, open: false, time: "" },
        { id: 4, adress: "smth", when: "09:00-11:00", barcode: "1444444", estimatedTime: '08.15', done: false, open: false, time: "" },
        { id: 5, adress: "smth", when: "09:00-11:00", barcode: "1555555", estimatedTime: '08.15', done: false, open: false, time: "" },
        { id: 6, adress: "smth", when: "09:00-11:00", barcode: "1666666", estimatedTime: '08.15', done: false, open: false, time: "" }
      ]
    }

    this.whenChangeOpen = this.whenChangeOpen.bind(this);
    this.whenChangeDone = this.whenChangeDone.bind(this);
  }

  whenChangeOpen(id) {
    const workList = this.state.workList.map(work => {
      return (id === work.id) ?
        { ...work, open: !work.open } :
        work
    });

    this.setState({ workList });
  }

  whenChangeDone(id, time1) {
    const workList = this.state.workList.map(work => {
      return (id === work.id) ?
        { ...work, done: !work.done, time: time1() } :
        work;
    });

    this.setState({ workList }, () => console.log(this.state.workList));
  }

  render() {
    return (
      <div className="main-container">
        {/* !this.state.value ? */}
        <PrintWork
          workList={this.state.workList}
          whenChangeOpen={this.whenChangeOpen}
          whenChangeDone={this.whenChangeDone}
        />
        {/* <Map/> */}
        {/* <Map /> */}
      </div>
    );
  }
}

export default App;