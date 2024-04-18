interface IObserver<T> {
  // T es nuestro alias (representación del tipo con el que vamos a trabajar)
  refresh(value: number): void;
}
