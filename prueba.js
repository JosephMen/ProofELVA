let closePath = [1,0,0,0,1,0,1,0,2,1]
const readline =  require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Please enter a number: ", (argument) => {
    let number = parseInt(argument)
    let value = 0
    while(number != 0){
        let quo = number%10
        value += closePath[quo]
        number = ~~(number/10)
    }
    console.log(`${argument} -> Output -> ${value}`)
    rl.close()
})

/**
 * Given a number n in the input, the times that it will be 
 * repeated will be at least log(n) *base 10*
 */