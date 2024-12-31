

// Note:- learn all map's built-in methods on: https://www.w3schools.com/js/js_object_maps.asp

// create the new map by using Map() constructor:
const map = new Map([['a', 1], ['b', 2]]) // a & b are keys and 1 & 2 are values


// iterate the elements of map
for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}

// add new element in map
map.set('c', 3);
console.log(map)

// check element exist in a map or not by using .has() method
console.log(map.has('a'))

// delete the element form the map
map.delete('a')
console.log(map)

// check the length of the map by using .size property
console.log(map.size)

// clear all the elements from the map by using .clear() method
map.clear()
console.log(map)
