
// Note:- learn all array's built-in methods on: https://www.w3schools.com/js/js_array_methods.asp 

const arr = [1, 2, 3, 4, "Anuj", "Rhaul"]

// print the first element of the array : TC - O(1)
console.log(arr[0])

// print the last element of the array : TC - O(1)
console.log(arr[arr.length-1])

// add element at the last index of the array : TC - O(n)
arr.push("Paro")
console.log(arr)

// add the element at the first index of the array : TC - O(n)
arr.unshift("20")
console.log(arr)

// remove the element from end of the array : TC - O(1)
arr.pop()
console.log(arr)

// remove the element from the begining of the array : TC - O(1)
arr.shift()
console.log(arr)

// iterate the array elements  : TC - O(n)
for(const item of arr) console.log(item)