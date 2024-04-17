class SaleContext {
  constructor(strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

const sale = new SaleContext(new RegularSaleStrategy(0.16));
console.log(sale.calculate(100)); // 116

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.discount = discount;
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

sale.setStrategy(new DiscountSaleStrategy(0.16, 10));
console.log(sale.calculate(100)); // 106

class ForeignSaleStrategy {
  getDollarPrice() {
    return 20;
  }

  calculate(amount) {
    return amount * this.getDollarPrice();
  }
}

sale.setStrategy(new ForeignSaleStrategy());
console.log(sale.calculate(100)); // 2000

console.log("******** Explicación práctica *********");

const data = [
  {
    name: "pikantus",
    country: "Alemania",
    info: "Cerveza de trigo",
    img: "https://www.cervezasonline.com/4142-thickbox_default/erdinger-pikantus-50cl.jpg",
  },
  {
    name: "pilsner",
    country: "República Checa",
    info: "Cerveza rubia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8mgQTp_bSDttzPBPqNx3YwCPCmeXopnkeT2pbggrNA&s",
  },
  {
    name: "ipa",
    country: "Estados Unidos",
    info: "Cerveza amarga",
    img: "https://ambar.com/wp-content/uploads/2018/09/Botella-Lupulo_-copia-1.jpg",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.strategy = strategy;
    this.data = data;
    this.element = element;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, item) => {
      return (
        acc +
        `<div>
          <h2>${item.name}</h2>
          <p>${item.country}</p>
        </div>
        <hr>`
      );
    }, "");
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, item) => {
      return (
        acc +
        `<div>
          <h2>${item.name}</h2>
          <p>${item.country}</p>
          <p>${item.info}</p>
          <img src="${item.img}" alt="${item.name}" width="100"  />
        </div>
        <hr>`
      );
    }, "");
  }
}

class ImageListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, item) => {
      return (
        acc +
        `<div>
          <img src="${item.img}" alt="${item.name}" width="100"  />
        </div>
        `
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ImageListStrategy(),
];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
  info.setStrategy(strategies[slcOptions.selectedIndex]);
  info.show();
});
