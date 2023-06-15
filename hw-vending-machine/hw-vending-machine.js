class vendingMachine {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const snack1 = new vendingMachine("Cheese Ring", 15);
const snack2 = new vendingMachine("Nova", 12);
const snack3 = new vendingMachine("Moby", 5);

let snacks = [snack1, snack2, snack3];

const snacksIndex = snacks.map((snacks) => {
  return snacks;
});

vendingMachine.vend = function (position, cash) {
  let snackPriceIndex = snacks.map((snacks) => {
    return snacks.price;
  });

  let snackPrice = snackPriceIndex[position];

  let change = cash - snackPrice;

  let snackNameIndex = snacks.map((snacks) => {
    return snacks.name;
  });
  let snackName = snackNameIndex[position];

  let receipt = { name: snackName, change: change };

  if (position > snacks.length) {
    console.log("Snack not found");
  } else if (cash < snackPrice) {
    console.log("Your money is not enough, sorry");
  } else {
    console.log(receipt);
  }
};

vendingMachine.vend(1, 20);
vendingMachine.vend(0, 20);
vendingMachine.vend(5, 20);
vendingMachine.vend(2, 2);
