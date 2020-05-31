// add solution here

function theBeatlesPlay(musicians, instrument){
    // console.log(musicians,instrument)
    const array = []
    
   
    // console.log(musicians)
    // console.log(instrument)
    for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instrument[i]}`);
    //console.log(`${musicians[i]} plays ${instrument[i]}`)
    }

    return array
}

// const facts = [
//     "He was the last Beatle to learn to drive",
//     "He was never a vegetarian",
//     "He was a choir boy and boy scout",
//     "He hated the sound of his own voice"
//   ];

function johnLennonFacts(facts){
    let new_array = []
    let i = 0
    while( i < facts.length){
    new_array.push(`${facts[i]}!!!`)
    i++    
   }
  return new_array

}

function iLoveTheBeatles(num){
    const array = []
    //let i = 0
    
    do{ 
        array.push(`I love the Beatles!`)
        num++
} while(num < 15)

return array
   
}