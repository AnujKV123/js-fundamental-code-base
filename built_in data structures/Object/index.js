
// Note:- learn all object's built-in methods on: https://www.w3schools.com/js/js_object_methods.asp

// createing an object
const obj = {
    name: "Anuj",
    department: "App Dev",
    "key":false,
    "key-one": true,

    // adding function to the object
    sayMyName: function(){
        console.log(this.name)
    }
}

console.log(obj.name)  //  : TC - O(1)
console.log(obj["department"])  //  : TC - O(1)

console.log(obj.key)  //   : TC - O(1)

// this is not possible with .(dot) notation 
// console.log(obj.key-one)

console.log(obj['key'])        //   : TC - O(1) 
console.log(obj["key-one"])  //  : TC - O(1)

// add an element in an object
obj.hobby = "cricket"  //   : TC - O(1)
console.log(obj)  //  : TC - O(n)
console.log(obj.hobby)  //   : TC - O(1)

// delete an element from object
delete obj.key   //   : TC - O(1)
console.log(obj)  // : TC - O(n)

// invoking the function that exist inside the object.
obj.sayMyName()  //   : TC - O(1)