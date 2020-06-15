//Reverse Integer

const reverseInt = (number) => {
    console.log(typeof number)
    const string = number.toString(10)
    console.log(string)
    const reversed = string.replace(/[^1-9]/g, '').split('').reverse()
    console.log(reversed)
    if (number < 0) {
        reversed.unshift('-')
    }
    const newNum = reversed.join('')
    console.log(newNum)
    const reversedInt = parseInt(newNum)
    console.log(typeof reversedInt)
    return reversedInt
}

reverseInt(-8302)

//Max Character

const maxChar = (string) => {
    const letterArray = string.replace(/\s/g, '').split('')
    console.log(letterArray)
    let frequencyCounter = {}
    for(let i =0; i < letterArray.length; i++){
        if (frequencyCounter[letterArray[i]]){
            frequencyCounter[letterArray[i]] += 1
        } else {
            frequencyCounter[letterArray[i]] = 1
        }
    }
    console.log(frequencyCounter)
    const answer = Object.keys(frequencyCounter).reduce(
        (a, b) => {
            return frequencyCounter[a] > frequencyCounter[b]? a : b
        }
    )
    console.log(answer)
    return answer
}

maxChar('njcsd 4839/ fdjfd')

/* Sources:
https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object/27376421
https://medium.com/javascript-in-plain-english/frequency-counter-algorithm-b3fa98efe8ba
*/