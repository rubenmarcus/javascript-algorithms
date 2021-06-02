/*

    http://plnkr.co/edit/zQePdsrKS1fAQ8XM


*/

// Product Sorting
// Write a program that sorts a list of comma-separated products, ranked from most popular and cheapest first to least popular and most expensive. For example "Selfie Stick,98,29", means that we sold 98 Selfie Stick at 29 dollars each. All numbers are integers. The input will be provided in a hardcoded array. No file I/O is needed.

// The product are ranked in the following order:

// By most popular
// If products are equally popular, sort by price (lower is better)
// You don't need to write your own sorting algorithm. It's recommended to use a built-in sorting library.


// name,quantity,price


const INPUT = [
  "Selfie Stick,98,29",
  "iPhone Case,90,15",
  "Fire TV Stick,48,49",
  "Wyze Cam,48,25",
  "Water Filter,56,49",
  "Blue Light Blocking Glasses,90,16",
  "Ice Maker,47,119",
  "Video Doorbell,47,199",
  "AA Batteries,64,12",
  "Disinfecting Wipes,37,12",
  "Baseball Cards,73,16",
  "Winter Gloves,32,112",
  "Microphone,44,22",
  "Pet Kennel,5,24",
  "Jenga Classic Game,100,7",
  "Ink Cartridges,88,45",
  "Instant Pot,98,59",
  "Hoze Nozzle,74,26",
  "Gift Card,45,25",
  "Keyboard,82,19"
]

let OUTPUT;
const splitVal = (val) => val.split(',');
// first try

 OUTPUT = (val) => { 
    let newArr = [];

    for(let i = 0; i< val.length; i++){
      newArr.push({
         name: val[i].split(',')[0],
         popularity:val[i].split(',')[1],
         price: val[i].split(',')[2]
      })
    }

const result = newArr.sort((a,b) => {
       if (a.popularity === b.popularity) {
        return a.price - b.price;
        } 
      return b.popularity - a.popularity;
    }).map((el) => el.name)
    return result;
}


console.log('First Try', OUTPUT(INPUT))


// second try


OUTPUT = (val) => {
return val.sort((a,b) => {
    if(a.split(',')[1] == b.split(',')[1]) {
      console.log('aqui', a,b)
       return a.split(',')[2] - b.split(',')[2];
    }
    return b.split(',')[1] - a.split(',')[1]

}).map((el) => el.split(',')[0]);

}
console.log('Second Try' , OUTPUT(INPUT))

// third try 

OUTPUT = INPUT.sort((a,b) => {
     return splitVal(a)[1] == splitVal(b)[1]?
      splitVal(a)[2] -  splitVal(b)[2] : splitVal(b)[1] - splitVal(a)[1]
     ;
}).map((el) => splitVal(el)[0]);

console.log('Third Try', OUTPUT)



// pradeep - @pradeepovig
const mostSoldAscendingPrice = INPUT.sort((a, b) => {
const [a_name, a_rating, a_price] = a.split(',');
const [b_name, b_rating, b_price] = b.split(',');
return a_rating === b_rating ? a_price - b_price : b_rating - a_rating;
});

console.log('Pradeep', mostSoldAscendingPrice)


// luiz - @luizhcardim
function orderByPopularity(a,b){
    const valuesA = a.split(',')
    const valuesB = b.split(',')
    const diffValue = valuesB[1] - valuesA[1]
    return diffValue != 0? diffValue : valuesA[2] - valuesB[2]
}

OUTPUT = INPUT.sort(orderByPopularity).map(el=>el.split(',')[0])


console.log('2 - Luiz @luizhcardim', OUTPUT)

// second luiz - @luizhcardim
OUTPUT = INPUT.map(el=>el.split(',')).sort((a,b)=>b[1] - a[1] != 0? b[1] - a[1] : a[2] - b[2]).map(el=>el[0])

console.log('OUT', OUTPUT)


// // lodash solution, new array

const newArray = _.map(INPUT, input => 
({
name: input.split(',')[0], 
popular: parseInt(input.split(',')[1]), 
price: parseInt(input.split(',')[2]) 

}));

OUTPUT = _.map(_.orderBy(newArray,['popular'],['desc']), 'name')


console.log('3 - Lodash', OUTPUT)


2
// // lodash solution 2 one line

OUTPUT = _.map(_.orderBy(INPUT , [
 (input) => 
parseInt(input.split(',')[1]),
(input) => 
parseInt(input.split(',')[2])
]

, ['desc']), 
(el) => el.split(',')[0]);


console.log('4 - Lodash', OUTPUT)


document.getElementById('output').innerHTML = OUTPUT;
