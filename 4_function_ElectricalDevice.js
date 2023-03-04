function ElectricalDevice(type, power) {
    this.type = type;
    this.power = power;
    this.isOn = false;
    this.isOnCheck = function() {
      return this.isOn
    }
  }
  
  ElectricalDevice.prototype.turnOn = function() {
    this.isOn = true;
  }
  
  ElectricalDevice.prototype.turnOff = function() {
    this.isOn = false;
  }
  
  function PC(brand, processor, memorySize) {
    this.brand = brand;
    this.processor = processor;
    this.memorySize = memorySize;
    this.sleep = false;
    this.goSleep = function() {
      this.sleep = true;
    }
    this.wakeup = function() {
      this.sleep = false;
    }
  }
  
  PC.prototype = new ElectricalDevice('Computer', 100);
  
  const myPC = new PC('Quantum', 'Elbrus', 1024);
  myPC.turnOn();
  myPC.goSleep();
  console.log(myPC, myPC.sleep);
  console.log(myPC.type, myPC.power)
  console.log(myPC.isOnCheck())
  
  
  function TableLED(brand, colorTemp, sensor, brightnesAdjustable) {
    this.brand = brand;
    this.lampType = 'LED';
    this.colorTemp = colorTemp;
    this.sensor = sensor;
    this.brightnesAdjustable = brightnesAdjustable;
    this.brightnesLevel = 'medium';
    this.brightnesLevelAdj = function(brightnesLevel) {
      this.brightnesLevel = brightnesLevel;
    }
  }
  
  TableLED.prototype = new ElectricalDevice('Lighter', 10);
  
  const myTableLamp = new TableLED('SuperLED', 'cold', true, true)
  myTableLamp.turnOn();
  console.log(myTableLamp)
  myTableLamp.brightnesLevelAdj('brigth');
  console.log(myTableLamp.brightnesLevel);
  console.log(myTableLamp.type, myTableLamp.power);
  console.log(myTableLamp.isOnCheck())