


// *************************** Time complexity: O(nlogn): worst case
function mergeSort(arr){

    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length/2)
    const rightArr = arr.slice(0, mid);
    const leftArr = arr.slice(mid);

    return merge(mergeSort(rightArr), mergeSort(leftArr));
}

function merge(rightArr, leftArr){

    const sortedArr = []
    while(rightArr.length && leftArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...rightArr, ...leftArr]
}


const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))