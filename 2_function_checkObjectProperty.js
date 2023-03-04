function checkObjectProperty(checkObject, propertyName) {
    return (propertyName in checkObject);
    }
  
  testObject = {
    prop1: 'значение_свойства_1',
    prop2: 'значение_свойства_2',
    prop3: 'значение_свойства_3',
    prop4: 'значение_свойства_4'
  }
  
  result = checkObjectProperty(testObject, 'prop3')
  console.log(result)