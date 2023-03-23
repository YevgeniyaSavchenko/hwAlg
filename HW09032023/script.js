function quickSort(arr, left, right) {
    if (left < right) {
      let pivot = arr[Math.floor((left + right) / 2)];
      let i = left;
      let j = right;
      while (i <= j) {
        while (arr[i] < pivot) {
          i++;
        }
        while (arr[j] > pivot) {
          j--;
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      if (left < j) {
        quickSort(arr, left, j);
      }
      if (i < right) {
        quickSort(arr, i, right);
      }
    }
    return arr;
  }