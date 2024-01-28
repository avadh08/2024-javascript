const myNum = [1, 2, 3]

// const totalNum = myNum.reduce( function(acc, currval) {
//     console.log(`acc is : ${acc} and currval is : ${currval}`);
//     return acc + currval
// },0)

const totalNum = myNum.reduce( (acc, curr) => acc + curr, 0)

console.log(totalNum);

const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'py course',
        price : 999
    },
    {
        itemName : 'android dev course',
        price : 9999
    },
    {
        itemName : 'data science course',
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);