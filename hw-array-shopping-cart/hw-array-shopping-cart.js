let usd = 50;
let serviceFee = 50;

const calculateBill = (cart) => {
  const totalBill = cart
    .map((item) => item.price)
    .reduce((acc, itemAmount) => acc + itemAmount * usd, serviceFee);
  return `PHP ${totalBill}`;
};

console.log(
  calculateBill([
    { name: "Air Fryer", price: 30 },
    { name: "Jar Container", price: 5 },
  ])
);

console.log(calculateBill([{ name: "Paso", price: 2 }]));
