// Component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }
  getDetail() {
    return this.name;
  }
}

// Decorador
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${super.getDetail()} - ${this.tradename} - ${this.brand}`;
  }
}

// Decorador 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return `${super.getDetail()} - $${this.price}`;
  }
}

// Decorador 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<p>${super.getDetail()}</p>`;
  }
}

// Ejecución

const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

// Decorador
const commercialInfoProductDecorator = new CommercialInfoProductDecorator(
  productComponent,
  "Pilsen",
  "Cristal"
);
console.log(commercialInfoProductDecorator.getDetail());

// Decorador 2
const storeProductDecorator = new StoreProductDecorator(productComponent, 2);
console.log(storeProductDecorator.getDetail());

// Decorador 2 con decorador 1
const storeCommercialInfoProductDecorator = new StoreProductDecorator(
  commercialInfoProductDecorator,
  2
);
console.log(storeCommercialInfoProductDecorator.getDetail());

// Decorador 3 con decorador 2 con decorador 1
const htmlProductDecorator = new HTMLProductDecorator(
  storeCommercialInfoProductDecorator
);
myDiv.innerHTML = htmlProductDecorator.getDetail();
console.log(htmlProductDecorator.getDetail());
