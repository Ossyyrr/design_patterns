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

class ItemsSubject extends Subject {
  constructor() {
    super();
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    this.notify(this.items);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }
  refresh(data) {
    this.element.innerHTML = data.reduce(
      (acc, item) => acc + `<p>${item}</p>`,
      ""
    );
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

const items = new ItemsSubject();

const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);
const div3Observer = new Observer((data) => (div3.innerHTML = data.length)); // Le meto una función al observer para que sepa qué hacer con los datos

items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(div3Observer);

function add() {
  console.log("txtName.value", txtName.value);
  items.add(txtName.value);
}
