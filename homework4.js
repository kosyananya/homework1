// propbel 1
function separateArrays(arr) {
    let oddArray = []
    let evenArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            oddArray.push(arr[i])
        } else {
            evenArray.push(arr[i])
        }
    }

    return [oddArray, evenArray]
}
separateArrays([0, 1, 2, 3, 4, 5, 6])


// problem 2
function compareWordList(word, arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0

        if (word.length === arr[i].length) {
            let a = arr[i]
            let index
            for (let j = 0; j < word.length; j++) {
                for (let k = 0; k < a.length; k++) {
                    if (word[j] === a[k] && k !== index) {
                        index = k
                        count++
                        break
                    }
                }
            }
        }

        if (count === word.length) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)

}

compareWordList("kamboja", ["bojakam", "lyalya", "bokamja", "ajkambo", "bababa"])

// problem3
function removeSecondText(text1, text2) {
    debugger
    let str = text1
    while (str.indexOf(text2) !== -1) {
        let a = str.length
        let b = str.indexOf(text2)
        let c = str
        str = ""
        for (let i = 0; i < a; i++) {
            if (b <= i && i < b + text2.length) {
                str += ""
            } else {
                str += c[i]
            }
        }
    }

    return str

}

removeSecondText("This is some text.", "is")

//problem 4
function uniqueElements(arr) {
    let uniqueArray = []

    for (let i = 0; i < arr.length; i++) {
        let isExist = false
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isExist = true
            }
        }
        if (!isExist) {
            uniqueArray.push(arr[i])
        }
    }

    return uniqueArray
}

uniqueElements([1, 2, 3, 4, 2, 4, 6])


// problem 5
function changeSymbol(str, firstSymbol, secondSymbol) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === firstSymbol) {
            newStr += secondSymbol
        } else {
            newStr += str[i]
        }
    }

    return newStr
}

changeSymbol("The results are not recorded yet", 't', "w")
