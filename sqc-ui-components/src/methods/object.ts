export const deepEqual = (obj1: any, obj2: any) => {
  if (obj1 === obj2) {
    // The objects are the same object
    return true
  } else if (typeof obj1 !== typeof obj2) {
    // The objects are of different types
    return false
  } else if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) {
    // The objects are not objects or one of them is null
    return obj1 === obj2
  } else {
    // Compare object properties recursively
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
      // The objects have different numbers of properties
      return false
    }
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        // The objects have different keys or values
        return false
      }
    }
    return true
  }
}
