

// Note1: if you want to find the largest number of the array then you use bubble sort because it gives largest
//          number of the array at the O(n) time comlexity.


// Note2: in bubble sort we find the largest nuber of the array and plasced it to the last index.
//          and this iteration continue while entier array size iterate.


// approch: 1 **************************************************** TC: O(n)^2

// function bubbleSort(arr){

//     let swapped;

//     do{
//         swapped = false;
//         for(let i=0; i < arr.length-1; i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i];
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     }while (swapped)

//     return arr;
// }

// const arr = [1, -2, 5, 7, 3, 4, 2]
// bubbleSort(arr)
// console.log(arr)


// approch: 2 ******************************************************** TC: O(n)^2


function bubbleSort(arr){

    let swapped;

    for(let i=0; i < arr.length-1; i++){
        swapped = false;
        for(let j=0; j < arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }

    return arr;
}

function bubbleSortRecursive(arr, n){

    if(n <= 1) return;

    var count = 0;
    for(var i=0; i<n-1; i++){
        if(arr[i] > arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp
            count++;
        }
    }

    if(count === 0) return;
    bubbleSortRecursive(arr, n-1)


}

// const arr = [1, -2, 5, 7, 3, 4, 2]
// const arr = [1, 2, 3, 4, 5]
const arr = [20, 10, 5, -1, 30, 11, 12, -2, 15, 6, 7]
// bubbleSort(arr)
bubbleSort(arr, arr.length)
console.log(arr)

