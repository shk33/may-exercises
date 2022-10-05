const iceCreamCatalog = [
    {
        description: "Palito Helado de agua",
        currency: "USD",
        price: 0.6,
        priceStr: '0.6',
    }, 
    {
        description: "Palito Helado de crema",
        currency: "USD",
        price: 1,
        priceStr: '1.0',
    },
    {
        description: "Bombon Helado marca heladix",
        currency: "USD",
        price: 1.6,
        priceStr: '1.6',
    },
    {
        description: "Bombon Helado marca heladovich",
        currency: "USD",
        price: 1.7,
        priceStr: '1.7',
    },
    {
        description: "Bombon Helado marca helardo",
        currency: "USD",
        price: 1.8,
        priceStr: '1.8',
    },
    {
        description: "Potecito helado confetis",
        currency: "USD",
        price: 2.9,
        priceStr: '2.9',
    },
    {
        description: "Pote 1/4 KG",
        currency: "USD",
        price: 2.9,
        priceStr: '2.9',
    },

];


let moneyAmountStr = prompt("¿Cuanto dinero tienes?"); // STRING
let moneyAmount = parseFloat(moneyAmountStr); // Parse to Number


// Get the ice creams list that I can buy
const iceCreamThatUserCanBuy = iceCreamCatalog.filter(iceCream => iceCream.price <= moneyAmount );

const maxPriceIceCream =  Math.max(...iceCreamThatUserCanBuy.map(iceCream => iceCream.price));
console.log({ iceCreamThatUserCanBuy })
console.log({ maxPriceIceCream })

const mostExpensiveIceCreamsThatYouCanBuy = iceCreamThatUserCanBuy.filter(iceCream => iceCream.price === maxPriceIceCream);
console.log({ mostExpensiveIceCreamsThatYouCanBuy })


let iceCreamsInfo = 'You can buy the following ice creams\n';
mostExpensiveIceCreamsThatYouCanBuy.forEach(iceCream => {
    iceCreamsInfo += `${iceCream.description}: ${iceCream.priceStr} ${iceCream.currency} \n`;
})
const change = moneyAmount - maxPriceIceCream;

iceCreamsInfo += `Your change is: ${parseFloat(change).toFixed(2)}`
// iceCreamsInfo += `Your change is: ${change}`
console.log(iceCreamsInfo)
