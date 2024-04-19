// Para ejecutar con la consola usar el plugin ts-node (npm i -g ts-node)
// cd decorator
// cd ts
// ts-node decorator.ts

interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `Product: ${this.name}`;
  }
}

abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;
  constructor(component: Component, tradename: string, brand: string) {
    super(component);
    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${super.getDetail()} - Comercial Info: ${this.tradename} - ${
      this.brand
    }`;
  }
}
// Decorator 2

class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);
    this.price = price;
  }

  public getDetail(): string {
    return `${super.getDetail()} - Store Info: ${this.price}`;
  }
}

// Ejecución

const product = new ProductComponent("Cerveza");
console.log(product.getDetail());

// decorator 1 con component
const productWithComercialInfo = new ComercialInfoProductDecorator(
  product,
  "Cerveza Corona",
  "Corona"
);
console.log(productWithComercialInfo.getDetail());

// decorador 2
const productWithStoreInfo = new StoreProductDecorator(product, 10);
console.log(productWithStoreInfo.getDetail());
