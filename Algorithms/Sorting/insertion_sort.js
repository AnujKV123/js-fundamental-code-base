
// approch: 1 ------------------------------------------
// function insertionSort(arr){
//     for(let i=1; i < arr.length; i++){

//         let numberToInsert = arr[i];
//         let j = i-1;

//         while(j>=0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j];
//             j = j-1;
//         }
//         arr[j+1] = numberToInsert;
//     }

//     // return arr;
// }


// approch: 2 -------------------------------------------
// function insertionSort(arr){

//     for(let i=1; i<arr.length; i++){

//         const temp = arr[i]
//         let j=i-1;
//         for(; j>=0; j--){
//             if(arr[j]>temp){
//                 arr[j+1] = arr[j]
//             }
//             else{
//                 break;
//             }
//         }
//         arr[j+1] = temp
//     }
// }



// approch: 3 -------------------------------------------
// function insertionSort(arr){

//     let i=1;
//     while(i<arr.length){

//         const temp = arr[i];
//         let j = i-1;
//         while(j>=0 && arr[j] > temp){
//             arr[j+1] = arr[j]
//             j =  j-1;
//         }
//         arr[j+1] = temp;
//         i++;
//     }
// }


// approch: 4 recursive approch --------------------------

function insertionSortRecursive(arr, n){

    if(n <= 1) return   ;

    insertionSort(arr, n-1);

    const temp = arr[n-1];
    let j = n-2

    while(j>=0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j =  j-1;
        }
        arr[j+1] = temp;
    

}



// const arr = [1, -2, 5, 7, 3, 4, 2]
// const arr = [1, 2, 3, 4, 5]
const arr = [20, 10, 5, -1, 30, 11, 12, -2, 15, 6, 7]
insertionSort(arr)
insertionSortRecursive(arr, arr.length)
console.log(arr)