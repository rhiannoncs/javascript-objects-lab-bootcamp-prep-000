var recipes = { }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}