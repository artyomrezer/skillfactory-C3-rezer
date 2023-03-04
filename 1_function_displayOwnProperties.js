function displayOwnProperties(checkObject) {
    for (let ownProperty in checkObject) {
      if (checkObject.hasOwnProperty(ownProperty)) {
        console.log(ownProperty, checkObject[ownProperty]);
      }
    }
  }
  
  testObject = {
    prop1: 'значение_свойства_1',
    prop2: 'значение_свойства_2',
    prop3: 'значение_свойства_3',
    prop4: 'значение_свойства_4'
  }
  
  displayOwnProperties(testObject)