// propbel 1

    function getFrequency(arr) {
        let obj = {}
        let arrLength = arr.length
        while (arr.length) {
            let count = 1
            let firstItem = arr[0]
            arr.splice(0, 1)
            for (i = 0; i < arr.length; i++) {
                if (firstItem === arr[i]) {
                    count++
                    arr.splice(i, 1)
                }
            }

            obj[firstItem] = count / arrLength

        }

        return obj
    }

    // problem 2

    function getLongestWorld(str) {
        let arr = str.split(',').join(' ').split('-').join(' ').split(" ")
        let longestWord = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= longestWord.length) {
                longestWord = arr[i]
            }
        }
        return longestWord
    }
    getLongestWorld("Which would be worse - to live as amonster, or to die as a good man?")

    // problem 3
    
       function getLongestSubstring(str) {
        let newStr = str.slice()
        let comparableStr = newStr[0]
        let comparableStrTemp = comparableStr
        for (let i = 1; i < newStr.length; i++) {
            let ifExist = false
            let prevStrLength = comparableStr.length
            for (let j = 0; j < prevStrLength; j++) {
                if (newStr[i] !== " " && newStr[i] === comparableStr[j]) {
                    ifExist = true
                    break
                }
            }

            if (ifExist) {
                newStr = newStr.slice(i)
                i = 1
                if (comparableStr.trim().length >= comparableStrTemp.trim().length) {
                    comparableStrTemp = comparableStr
                }
                comparableStr = newStr[0]


            } else {
                comparableStr += newStr[i]
            }
        }
        return comparableStrTemp
    }


    // problem4

    function longestSubstring(str) {
        let arr = str.split('')
        let cloneArr = arr.slice(0)

        for (let i = 0; i < cloneArr.length - 2; i += 3) {
            arr[i + 3] = cloneArr[i]

        }
        arr.shift()
        str = arr.join('')
        return arr
    }

    longestSubstring('dfgjkloyp')


    //problem 5
    function getPosiibleSubsetLengthTree(arr) {
        if (arr.length < 3) {
            return arr
        } else {
            let posibleSubsets = []
            for (let i = 0; i < arr.length - 2; i++) {
                for (let j = i + 1; j < arr.length - 1; j++) {
                    for (let k = j + 1; k < arr.length; k++) {
                        posibleSubsets.push([arr[i], arr[j], arr[k]])
                    }
                }
            }

            return posibleSubsets
        }
    }
    getPosiibleSubsetLengthTree([5, 9, 23, 0, -2, -1])
