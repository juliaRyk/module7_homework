class Technics {
    constructor(name) {
      this.name = name;
    }
    
    brand() {
      console.log(`Technics brand — ${this.name}.`)
    }
  }
  
  class Computer extends Technics {
    constructor(name) {
    super(name);
    }
    
    brand() {
      console.log(`Computer brand ${this.name}`);
    }
  }
  
  let c = new Computer('Acer');
  c.brand();
  


  class Microwave extends Technics {
    constructor(name) {
    super(name);
    }
    
    brand() {
      console.log(`Microwave brand ${this.name}`);
    }
  }
  
  let m = new Microwave('Samsung');
  m.brand();
  


  class DeskLamp extends Technics {
    constructor(name) {
    super(name);
    }
    
    brand() {
      console.log(`Desk lamp brand ${this.name}`);
    }
  }
  
  let dl = new DeskLamp('Leroy Merlin');
  dl.brand();