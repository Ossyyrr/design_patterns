// Para ejecutar con la consola usar el plugin ts-node (npm i -g ts-node)
// cd singleton
// cd ts
// ts-node singleton.ts

console.log("Singleton Pattern");

class SingletonTs {
  private static instance: SingletonTs;
  public random: number;

  // Private constructor for protect the instance
  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTs {
    if (!SingletonTs.instance) {
      SingletonTs.instance = new SingletonTs();
    }
    return SingletonTs.instance;
  }
}

const singleton = SingletonTs.getInstance();
const singleton2 = SingletonTs.getInstance();

console.log(singleton.random);
console.log(singleton2.random);
