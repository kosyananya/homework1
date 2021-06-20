   //problem 1
    // let num = +prompt()
    // let count = 0
    // while (num) {
    //     if (num % 10 === 9 || num === 9) {
    //         count++
    //     }
    //     num = (num - num % 10) / 10
    // }
    // console.log(count)


    // problem 2
    // let num1 = +prompt()
    // let num2 = +prompt()
    // if (num1 > num2) {
    //     let themp = num1
    //     num1 = num2
    //     num2 = themp
    // }
    // for (let i = num1; i <= num2; i++) {
    //     if (i === 0) {
    //         continue
    //     } else {
    //         let numThemp = i

    //         while (!(numThemp % 2) || numThemp === 1) {
    //             if (numThemp === 1) {
    //                 console.log(i)
    //             }
    //             numThemp = numThemp / 2
    //         }
    //     }
    // }

    //problem 3
    // let num = +prompt()
    // let themp1
    // let themp2
    // let str = ""

    // while (num >= 10 || num <= -10) {
    //     themp1 = num % 10
    //     themp2 = ((num - themp1) / 10) % 10
    //     if (!(themp1 % 2) && !(themp2 % 2)) {
    //         str = "-" + String(themp1) + str
    //     } else {
    //         str = String(themp1) + str
    //     }
    //     num = (num - num % 10) / 10
    // }
    // if (num < 10 || num > -10) {
    //     str = String(themp2) + str
    // }
    // console.log(str)

    //poblem 4
    // let num = +prompt()
    // let str = ""
    // while (num) {
    //     str += num % 10
    //     num = (num - num % 10) / 10
    // }
    // console.log(str)


    //problem 5
    // let num = +prompt()
    // let count = 0
    // for (let i = 2; ; i++) {
    //     let isPrime = true
    //     for (let j = 2; j <= i / 2; j++) {
    //         if (i % j === 0) {
    //             isPrime = false
    //             break
    //         }
    //     }
    //     if (isPrime) {
    //         count++
    //     }
    //     if (isPrime && count === num) {
    //         console.log(i)
    //         break
    //     }
    // }