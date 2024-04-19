// Component
class ClientComponent {
  constructor(url) {
    this.url = url;
  }
  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}
// Decorator
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }
  async getData() {
    return await this.clientComponent.getData();
  }
}

// Decorador 1
class UpperCaseClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((item) => {
      item.title = item.title.toUpperCase();
      return item;
    });
    return newData;
  }
}

// Decorador 2
class HTMLClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((item) => {
      item.title = `<h1>${item.title}</h1>`;
      item.thumbnailUrl = `<img src="${item.thumbnailUrl}" />`;
      return item;
    });
    return newData;
  }
}

(async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const client = new ClientComponent(url);
  const data = await client.getData();
  console.log(data);

  const upperClient = new UpperCaseClientDecorator(client);
  const data2 = await upperClient.getData();
  console.log(data2);

  const htmlClient = new HTMLClientDecorator(upperClient); // Mezcla de decoradores
  const data3 = await htmlClient.getData();
  console.log(data3);

  //divContent1
  divContent1.innerHTML = data3.reduce((acc, item) => {
    acc += item.title + item.thumbnailUrl;
    return acc;
  }, "");

  const htmlClient2 = new HTMLClientDecorator(client); // solo decorador HTML
  const data4 = await htmlClient2.getData();
  console.log(data4);
  divContent2.innerHTML = data4.reduce((acc, item) => {
    acc += item.title + item.thumbnailUrl;
    return acc;
  }, "");
})();
