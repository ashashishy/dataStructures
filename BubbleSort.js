function bubbleSort(arr){
    var noswaps;
    for(var i=arr.length;i>0;i--){
        noswaps=true;
        for (var j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                noswaps=false;
            }
        }
        if(noswaps) false;
    }
    return arr;
}

bubbleSort([2,4,5,75,-89,6,15,12,36]);