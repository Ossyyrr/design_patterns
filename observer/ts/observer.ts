// Para ejecutar con la consola usar el plugin ts-node (npm i -g ts-node)
// cd observer
// cd ts
// ts-node observer.ts

interface IObserver<T> {
  // T es nuestro alias (representación del tipo con el que vamos a trabajar)
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

// Debería llamarse Subject pero está duplicado en otro archivo
class MySubject<T> implements ISubject<T> {
  observers: IObserver<T>[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

// Debería llamarse Observer pero está duplicado en otro archivo
class MyObserver<T> implements IObserver<T> {
  private fn: (value: T) => void;
  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }
  refresh(value: T): void {
    this.fn(value);
  }
}

//NUMBER
const subject = new MySubject<number>();

const observer1 = new MyObserver<number>((value) => {
  console.log("Primer Observer", value);
});

const observer2 = new MyObserver<number>((value) => {
  console.log("Hello", value);
});

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(1);
subject.notify(30);

// STRING
const subjectString = new MySubject<string>();
const observerString = new MyObserver<string>((value) => {
  console.log("Observer String", value);
});
const observerString2 = new MyObserver<string>((value) => {
  console.log("Observer String", value.toUpperCase());
});
subjectString.subscribe(observerString);
subjectString.subscribe(observerString2);
subjectString.notify("Hola");
subjectString.notify("Mundo");
