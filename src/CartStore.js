import { observable, action, computed, autorun, when, reaction } from "mobx";

export default class Cart {
  constructor() {
    reaction(
      () => {
        let shoesNumber = 0;
        this.items.forEach(item => {
          if (item === "shoes") shoesNumber++;
        });
        return shoesNumber;
      },
      shoesNumber => {
        console.log("收到鞋子啦。。。。。" + shoesNumber);
      }
    );
    when(
      () => this.items.some(item => item === "shoes"),
      () => {
        console.log("第一次收到鞋子");
      }
    );
  }

  @observable modified = new Date();
  @observable items = [];

  n = observable.box(1);
  disposer = autorun(() => console.log("我是autorun  " + this.items.length));

  @computed get total() {
    return this.items.length;
  }

  @action
  addItem = (name, quantity) => {
    while (quantity > 0) {
      this.items.push(name);
      quantity--;
    }
    this.modified = new Date();
  };
}
