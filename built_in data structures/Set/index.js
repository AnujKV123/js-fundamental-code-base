
// Note:- learn all object's built-in methods on: https://www.w3schools.com/js/js_object_sets.asp

// create the new set by using Set() constructor:
const set = new Set([1, 2, 3])

// iterate the set's element
for(const item of set){
    console.log(item)
}

// add an new element into the set:
set.add(4)
console.log(set)

// duplicate values are not allowed in the set
set.add(4)
console.log(set)

// check the element exist on a set or not
console.log(set.has(4))

// delete the element from the set
set.delete(2)
console.log(set)

// check the number of item in a set
console.log(set.size)

// delete the all values from the set
set.clear()
console.log(set)