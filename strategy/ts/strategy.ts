// Para ejecutar con la consola usar el plugin ts-node (npm i -g ts-node)
// cd strategy
// cd ts
// ts-node strategy.ts

console.log("Strategy");

interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDbStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("LoginDbStrategy - Entrando a la base de datos");
    if (user === "admin" && password === "entra") return true;
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("LoginServiceStrategy - Servicio de authentication");
    if (user === "admin" && password === "entra") return true;
    return false;
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("LoginGoogleStrategy - Autenticación con GOOGLE ");
    if (user === "admin" && password === "entra") return true;
    return false;
  }
}

const auth = new LoginContext(new LoginDbStrategy());

console.log(auth.login("admin", "entra")); // true
console.log(auth.login("admin", "entra2")); // false

auth.setStrategy(new LoginServiceStrategy());

console.log(auth.login("admin", "entra")); // true

auth.setStrategy(new LoginGoogleStrategy());

console.log(auth.login("admin", "entra")); // true
