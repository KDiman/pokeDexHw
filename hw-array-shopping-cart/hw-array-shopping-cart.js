let usd = 50;
let serviceFee = 50;

const calculateBill = (cart) => {
  const totalBill = cart.reduce(
    (acc, item) => acc + item.price * usd,
    serviceFee
  );
  return "PHP " + totalBill;
};

// const calculateBill = (cart) => {
//   let totalBill = 0 + serviceFee;
//   cart.map((item) => (totalBill += item.price * usd));
//   return "PHP " + totalBill;
// };

console.log(
  calculateBill([
    { name: "Air Fryer", price: 30 },
    { name: "Jar Container", price: 5 },
  ])
);

console.log(calculateBill([{ name: "Paso", price: 2 }]));
