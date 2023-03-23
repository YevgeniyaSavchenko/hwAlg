/* 
Реализуйте методы:
remove() - удаляет последний
removeAt(index) - удаляет по индексу
growSize() - увеличивает размер
set(index, data) - изменяет элемент
clean() - удаляет все элементы
contains(data) - проверяет существует ли элемент
isEmpty() - вернет false, если в структуре есть элемент
*/

const arr = [1,2,3,4,5];

function remove (array) {
    let newArr = []
    for (let i = 0; i < array.length -1; i++) {
        newArr[i] = array[i];
    }

    array.length = newArr.length;
    for (let i = 0; i < array.length; i++) {
        array[i] = newArr[i] 
    }
    return array;
}

const newArr = remove(arr);
console.log(newArr); //[ 1, 2, 3, 4 ]

function removeAt(arr, index) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) {
        newArr[newArr.length] = arr[i];
      }
    }
    arr.length = newArr.length;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = newArr[i];
    }
    return arr;
  }

  const newArr2 = removeAt(arr, 2)
  console.log(newArr2); //[ 1, 2, 4 ]
  

  function growSize(arr, newSize) {
    let newArr = [];
    for (let i = 0; i < newSize; i++) {
      newArr[i] = arr[i] || null;
    }
    arr.length = newArr.length;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = newArr[i];
    }
    return arr;
  }
  
  const newArr3 = growSize(arr, 6)
  console.log(newArr3); //[ 1, 2, 4, null, null, null ]

  function set(arr, index, data) {
    arr[index] = data;
    return arr;
  }

  const newArr4 = set(arr, 3, 5)
  console.log(newArr4); //[ 1, 2, 4, 5, null, null ]

  function clean(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = null;
    }
    arr.length = 0;
    return arr;
  }

  const newArr5 = clean(arr)
  console.log(newArr5); //[]
  

  function contains(arr, data) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === data) {
        return true;
      }
    }
    return false;
  }

  const newArr6 = contains(arr, 2)
  console.log(newArr6); //false
  
  function isEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null) {
        return false;
      }
    }
    return true;
  }

  const newArr7 = isEmpty(arr)
  console.log(newArr7); //true
  

  