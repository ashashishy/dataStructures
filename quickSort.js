function quickSort(arr, left = 0, right = arr.length - 1) {
    function pivot(arr, start = 0, end = arr.length - 1) {
        function swap(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        pivot = arr[start];
        swappindex = start;
        for (var i = start + 1; i <= end; i++) {
            if (pivot > arr[i]) {
                swappindex++;
                swap(arr, swappindex, i)
            }
        }
        swap(arr, start, swappindex);
        return swappindex;
    }
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


console.log(quickSort([5, 2, 3, 4, 12, 1, 16]));
