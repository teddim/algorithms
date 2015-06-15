function bubbleSort(array) {
  var end = array.length;
   for(var j =0; j < array.length -1; j++){
    for(var i =0; i < end; i++){
      if (array[i+1] < array[i]) {
        var tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
      }
      console.log(array);
    }
     end--;
   }
    return array;
}

array = [10,9,8,7,6,5,4,3,2,1];
console.log(bubbleSort(array));
