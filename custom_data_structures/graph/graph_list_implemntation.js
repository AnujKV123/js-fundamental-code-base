

// graph implementation by using Adjacency List

// example:
//    A
//   / \
//  /   \
// B     C

// const AdjacencyList = {
//     'A': ['B'],
//     'B': ['A', 'C'],
//     'C': ['B']
// }

// console.log(AdjacencyList['A'])
// console.log(AdjacencyList['B'])
// console.log(AdjacencyList['C'])



class Graph{
    constructor(){
        this.AdjacencyList = {}
    }

    addVertex(vertex){
        if(!this.AdjacencyList[vertex]){
            this.AdjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.AdjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.AdjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.AdjacencyList[vertex1].add(vertex2)
        this.AdjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.AdjacencyList[vertex1].delete(vertex2)
        this.AdjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.AdjacencyList[vertex]){
            return null
        }
        for(let adjacentVertex of this.AdjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.AdjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2){
        return this.AdjacencyList[vertex1].has(vertex2) && 
                this.AdjacencyList[vertex2].has(vertex1);
    }

    display(){
        for(let vertex in this.AdjacencyList){
            console.log(vertex + " -> " + [...this.AdjacencyList[vertex]])
        }
    }
}

const graph = new Graph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.display()

console.log(graph.hasEdge('A', 'B'))
console.log(graph.hasEdge('B', 'C'))
console.log(graph.hasEdge('A', 'C'))

graph.removeEdge('A', 'B')
graph.display()

console.log('--------------------')
graph.removeVertex('A')
graph.display()