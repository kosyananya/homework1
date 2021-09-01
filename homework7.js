//problem 1

function customShift(arr, i = 0) {
    if(arr.length === 0) {
        return arr
    } else if(arr.length === 1) {
        arr.length = 0 
        return arr
    }else if(i === arr.length - 1) {
        arr.length = arr.length - 1
        return arr
    } else {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        return customShift(arr, i + 1)
    }
}
customShift([1,2,3,4,5,6])

//problem 2


function flatten(arr, flatArr) {
    if (arr.length === 0) {
      return flatArr
    }
    let firstElem = arr[0]
    let rest = arr.slice(1)
    if (Array.isArray(firstElem)) {
      return flatten(firstElem.concat(rest), flatArr)
    } else {
      flatArr.push(firstElem)
      return flatten(rest, flatArr)
    }
    
  }


//problem 3

function calculateSum(num) {
    num = num.toString().split('')
    num = num.reduce(function fnSum(a,b) {
        return +a + +b
    }, 0)

    if(num < 10) {
        return num
    }else {
        return calculateSum(num)
    }

}

//problem 4 

function invertKeyValue(obj) {
  let result = {}
  for(let key in obj) {
    if (obj[key] in result) {
      if(Array.isArray(result[obj[key]])) {
        result[obj[key]].push(key)
      } else {
        result[obj[key]] = [result[obj[key]], key]
      }
    } else {
      result[obj[key]] = key
    }
  }
  return result
}

//problem 5


