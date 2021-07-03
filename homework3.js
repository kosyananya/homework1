// propbel 1

function createArray(start, end, space) {
    let arr = []
    let n = start
    if (space > 0) {
        while (n <= end) {
            arr.push(n)
            n = n + space
        }
        return arr
    } else {
        return "It is impossible to do"
    }
}
createArray(1, 17, 4)


// problem 2

function maxElement(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
maxElement([1, 2, 0, -9, 10, 8])


// problem 3

function reverseArray(arr) {
    let temp
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = temp
    }
    return arr
}
reverseArray([1, 2, 3, 4, 5])

// problem 4

function productsTwoNeighbours(arr) {
    let newArr = []
    for (let i = 0; i< arr.length - 1; i++) {
        newArr.push(arr[i] * arr[i + 1])
    }
    return newArr
}
productsTwoNeighbours([1,2,3,4])


// problem 5

function getNewArr(arr, num) {
    let isContein = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            arr.splice(i, 1)
            isContein = true
        }
    }
    if (!isContein) {
        arr.push(num)
    }
    return arr
}
getNewArr([1, 2, 3], 4)