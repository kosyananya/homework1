function subsetsArr(arr, len, subArr = [], restArr = [], result = []) {
    if (arr.length < len) {
        return result
    }
    if (arr.length === len) {
        result.push(arr)
        return result
    }
    subArr = arr.slice(0, len)
    restArr = arr.slice(len, arr.length)
    result.push(subArr)
    for (let i = 1; i < subArr.length; i++) {

        for (let j = 0; j < restArr.length; j++) {
            let subArrTemp = subArr.slice()
            subArrTemp[i] = restArr[j]
            result.push(subArrTemp)
        }
    }
    arr.shift()
    return subsetsArr(arr, len, subArr = [], restArr = [], result)
}

subsetsArr([1,2,3,4,5],3)