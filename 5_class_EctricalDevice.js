class EctricalDevice {
    constructor(type, power) {
      this.type = type;
      this.power = power;
      this.isOn = false;
    } 
    isOnCheck() {
        return this.isOn;
    }  
    turnOn() {
      this.isOn = true;
    }
    turnOff() {
      this.isOn = false;
    }
  }
  
  class PC extends EctricalDevice {
    constructor(type, power, brand, processor, memorySize) {
      super(type, power);
      this.brand = brand;
      this.processor = processor;
      this.memorySize = memorySize;
      this.sleep = false;
    }
    goSleep() {
      this.sleep = true;
      }
    wakeup() {
      this.sleep = false;
      }
   }
    
  const myPC = new PC('Computer', 100, 'Quantum', 'Elbrus', 1024);
  myPC.turnOn();
  myPC.goSleep();
  console.log(myPC, myPC.sleep);
  console.log(myPC.type, myPC.power)
  console.log(myPC.isOnCheck())
    
  class TableLED extends EctricalDevice {
    constructor(type, power, brand, colorTemp, sensor, brightnesAdjustable) {
      super(type, power);
      this.brand = brand;
      this.lampType = 'LED';
      this.colorTemp = colorTemp;
      this.sensor = sensor;
      this.brightnesAdjustable = brightnesAdjustable;
      this.brightnesLevel = 'medium';
    }
    brightnesLevelAdj(brightnesLevel) {
      this.brightnesLevel = brightnesLevel;
    }
  }
  
  const myTableLamp = new TableLED('Lighter', 10, 'SuperLED', 'cold', true, true)
  myTableLamp.turnOn();
  console.log(myTableLamp)
  myTableLamp.brightnesLevelAdj('brigth');
  console.log(myTableLamp.brightnesLevel);
  console.log(myTableLamp.type, myTableLamp.power);
  console.log(myTableLamp.isOnCheck())