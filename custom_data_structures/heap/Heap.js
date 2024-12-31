class Heap {
	constructor(compareFn) {
	  this.heap = [];
	  this.compare = compareFn || ((a, b) => a - b); // Default is min-heap (ascending order)
	}
  
	// Get the index of the parent node
	parentIndex(index) {
	  return Math.floor((index - 1) / 2);
	}
  
	// Get the index of the left child node
	leftChildIndex(index) {
	  return 2 * index + 1;
	}
  
	// Get the index of the right child node
	rightChildIndex(index) {
	  return 2 * index + 2;
	}
  
	// Swap elements at index1 and index2
	swap(index1, index2) {
	  [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
	}
  
	// Insert a new value into the heap
	insert(value) {
	  this.heap.push(value);
	  this.heapifyUp(this.heap.length - 1);
	}
  
	// Remove and return the root element (min or max depending on heap type)
	extractRoot() {
	  if (this.heap.length === 0) return null;
	  if (this.heap.length === 1) return this.heap.pop();
  
	  const root = this.heap[0];
	  this.heap[0] = this.heap.pop(); // Replace root with last element
	  this.heapifyDown(0);
  
	  return root;
	}
  
	// Peek at the root element without removing it
	peek() {
	  return this.heap[0] || null;
	}
  
	// Move the element at the given index up to its correct position
	heapifyUp(index) {
	  let currentIndex = index;
	  while (
		currentIndex > 0 &&
		this.compare(this.heap[currentIndex], this.heap[this.parentIndex(currentIndex)]) < 0
	  ) {
		this.swap(currentIndex, this.parentIndex(currentIndex));
		currentIndex = this.parentIndex(currentIndex);
	  }
	}
  
	// Move the element at the given index down to its correct position
	heapifyDown(index) {
	  let currentIndex = index;
	  while (this.leftChildIndex(currentIndex) < this.heap.length) {
		let smallerChildIndex = this.leftChildIndex(currentIndex);
  
		if (
		  this.rightChildIndex(currentIndex) < this.heap.length &&
		  this.compare(this.heap[this.rightChildIndex(currentIndex)], this.heap[smallerChildIndex]) < 0
		) {
		  smallerChildIndex = this.rightChildIndex(currentIndex);
		}
  
		if (this.compare(this.heap[currentIndex], this.heap[smallerChildIndex]) <= 0) {
		  break;
		}
  
		this.swap(currentIndex, smallerChildIndex);
		currentIndex = smallerChildIndex;
	  }
	}
  
	// Return the size of the heap
	size() {
	  return this.heap.length;
	}
  
	// Check if the heap is empty
	isEmpty() {
	  return this.heap.length === 0;
	}
  }
  
  // Example Usage:
  
  // Min-Heap (default)
  const minHeap = new Heap();
  minHeap.insert(3);
  minHeap.insert(10);
  minHeap.insert(5);
  minHeap.insert(1);
  minHeap.insert(2);
  
  console.log(minHeap.extractRoot()); // 1 (smallest element)
  console.log(minHeap.extractRoot()); // 2
  console.log(minHeap.peek()); // 3
  console.log(minHeap.size()); // 3
  
  // Max-Heap
  const maxHeap = new Heap((a, b) => b - a); // Custom comparator for max-heap
  maxHeap.insert(3);
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(1);
  maxHeap.insert(2);
  
  console.log(maxHeap.extractRoot()); // 10 (largest element)
  console.log(maxHeap.extractRoot()); // 5
  console.log(maxHeap.peek()); // 3
  console.log(maxHeap.size()); // 3
  