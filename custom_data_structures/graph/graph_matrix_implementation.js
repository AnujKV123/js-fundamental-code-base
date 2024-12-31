

// graph implementation by using Adjacency Matrix

// example:
//    A
//   / \
//  /   \
// B     C

const matrix = [
//         0  1  2
//         A  B  C
 /* 0 A */[0, 1, 0],
 /* 1 B */[1, 0, 1],
 /* 2 C */[0, 1, 1]
]

console.log("1: true and 0: false")
console.log("--------------------------")
console.log("edge exist between A and B: ", matrix[0][1])
console.log("edge exist between B and B: ",matrix[1][1])
console.log("edge exist between B and C: ",matrix[1][2])