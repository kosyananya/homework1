// problem 1

    function largerArr(arr, num) {
        let newArr = arr.filter(elem => elem > num);

        if (newArr.length) {
            return newArr
        } else {
            return "Such values do not exist."
        }
    }

    largerArr([10, 25, 16, -5, 30, 15, 24], 16)


    // problem 2

    function getEvenNumbers(start, end) {
        if (start > end) {
            let tmp = start
            start = end
            end = temp
        }
        let arr = []
        for (let i = start; i <= end; i++) {
            let tempArr = i.toString().split('')
            let isEven = tempArr.every(function (el, index) {
                return el % 2 === 0
            })

            if (isEven) {
                arr.push(i)
            }
        }
        return arr.join(",")
    }

    problem 3

    function isAllOdd(num) {
        num = num.toString()
        if (num[0] % 2 === 0) {
            return "true"
        }
        if ((num.length === 1) && (num[0] % 2 !== 0)) {
            return "false"
        } else {
            return isAllOdd(num.slice(1))
        }
    }



    // problem 4 

    function minPositivElem(arr, minPositiv = Infinity) {
       if(arr.length === 1) {
           if(minPositiv === Infinity) {
               if(arr[0] > 0) {
                   return arr[0]
               } else {
                   return -1
               }
           } else {
               if (arr[0] < 0) {
                   return minPositiv
               } else if (arr[0] < minPositiv){
                    return arr[0]
               } else {
                   return minPositiv
               }
           }
       } else {
           if(arr[0] >= 0 && arr[0] < minPositiv) {
            minPositiv = arr[0]
           }
           arr.shift()
       }
        return minPositivElem(arr, minPositiv)

    }


    // problem 5
    function violatedIndex(arr, i = 0) {
        if(arr.length === 1 || arr.length === 0) {
            return -1
        } else if(i === arr.length - 2) {
            if(arr[i + 1] < arr[i]) {
                return i + 1
            } else {
                return -1
            }

        } else {
            if(arr[i + 1] < arr[i]) {
                return i + 1
            } else { 
                return violatedIndex(arr, i + 1)
            }
        }
    } 