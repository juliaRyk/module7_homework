function Technics(name){
    this.rosetteСurrent = 'conductive';
    this.name = name;
  };
  
  Technics.prototype.getPower = function(power) {
    console.log(`Device power is ${power} Vt`)
  }
  
  function BrandTechnics(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  
  BrandTechnics.prototype = new Technics() 
    
  const computer = new BrandTechnics('computer', 'Acer');
  const microwave = new BrandTechnics('microwave', 'Samsung');
  const deskLamp = new BrandTechnics('deskLamp', 'Leroy Merlin');
  
  computer.getPower('350');
  microwave.getPower('850');
  deskLamp.getPower('12');
  
  console.log(computer);
  console.log(microwave);
  console.log(deskLamp);