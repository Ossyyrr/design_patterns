class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsuscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.refresh(data));
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const subject = new Subject();
const o1 = new Observer((data) => console.log("Observer 1", data));
const o2 = new Observer((data) => (div1.innerHTML = data));
const o3 = new Observer(
  (data) => (div2.innerHTML = data.split("").reverse().join(""))
);

subject.subscribe(o1);
subject.subscribe(o2);
subject.subscribe(o3);

function change() {
  subject.notify(myText.value);
}
