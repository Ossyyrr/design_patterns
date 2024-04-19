class Person {
  constructor(name, lastName, age, country, city, hobbies) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }
}
class PersonBuilder {
  constructor() {}

  reset() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  addHobbies(hobbies) {
    this.hobbies.push(hobbies);
    return this;
  }

  build() {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

personBuilder = new PersonBuilder();
const hector = personBuilder
  .setName("Hector")
  .setLastName("Flores")
  .setAge(27)
  .setCountry("Mexico")
  .setCity("CDMX")
  .addHobbies("Gaming")
  .addHobbies("Reading")
  .build();
