var recipes = {
  prop: '1'
}


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
 //object = { : 3 }

  return object;
}
