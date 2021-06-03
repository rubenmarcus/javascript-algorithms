// http://plnkr.co/plunk/sCkRggjrMPgmrGmn

// Product Sorting
// Write a program that sorts a list of comma-separated products, ranked from most popular and cheapest first to least popular and most expensive. For example "Selfie Stick,98,29", means that we sold 98 Selfie Stick at 29 dollars each. All numbers are integers. The input will be provided in a hardcoded array. No file I/O is needed.

// The product are ranked in the following order:

// show total profit
// show number of sellings
// show medium price
// show medium sellings
// show best added value product


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
  
  //Helper functions
  const splitVal = (val) => val.split(',');
  
  const AvgNums = (val) => {
    return val.reduce((a, v, i) => parseInt((a * i + v) / (i + 1), 0))
  }
  
  const money = (value) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
  
  
  // Separate columns sellings (popularity) and price, in new arrays
  
  const arrN = (val, parsedVal) => {
    return val.map((val) =>
    { 
      return parseInt(splitVal(val)[parsedVal])
    })
  }
  
  
  // Calculation for best value added product, Average Sellings, Average Price
  const popularityArray = arrN(INPUT, 1);
  const pricingArray = arrN(INPUT, 2);
  
  const profitArray = popularityArray.map((v,i) => v * pricingArray[i]);
  
  const bestValue = INPUT[profitArray.indexOf(Math.max(...profitArray))].split(',')[0];
  
  console.log(`Best Value: ${bestValue}`)
  
  console.log(`Average Sellings: ${AvgNums(popularityArray)}, Average Price: ${AvgNums(pricingArray)}`)
  
  
  // Calculation of Profits, NetProfit, Total Price, N of Sellings
  
  const calcVal = (val) => {
        const {profit, totSellings, totPrice}  = val.map(
          (a) => {
            return {
              profit: splitVal(a)[1] * splitVal(a)[2],
              sellings: parseInt(splitVal(a)[1]),
              price: parseInt(splitVal(a)[2])
              }
          }
        ).reduce((a,b) => { 
            a.totSellings = a.totSellings + b.sellings;
            a.profit = a.profit + b.profit;
            a.totPrice = a.totPrice + b.price;
  
            return a;
  
        },{profit: 0, totSellings:0, totPrice:0})
        
  
        console.log('sellings',totSellings);
        console.log('profit', money(profit));
        console.log('total Price', money(totPrice));
        console.log('netprofit', money(profit -  totPrice))
  }
  
  calcVal(INPUT);