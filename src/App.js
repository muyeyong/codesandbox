import React from "react";
import "./styles.css";
import { inject, observer } from "mobx-react";
@inject("store")
@observer
class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <React.Fragment>
        {store.items &&
          store.items.map((item, idx) => {
            return <p key={item + idx}>{item + idx}</p>;
          })}
        <button onClick={() => store.addItem("shoes", 2)}>添加2双鞋子</button>
        <button onClick={() => store.addItem("tshirt", 1)}>添加1件衬衫</button>
        <p>我是total &nbsp;  &nbsp;{store.total}</p>
    
        <button onClick={() => store.disposer()}>清除自动输出</button>
      </React.Fragment>
    );
  }
}

export default App;
