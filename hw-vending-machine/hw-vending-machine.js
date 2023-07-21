class VendingMachine {
  constructor() {
    this.snacks = [
      { name: "Cheese Ring", price: 15 },
      { name: "Nova", price: 12 },
      { name: "Moby", price: 5 },
    ];
  }

  vend(position, cash) {
    let snackPriceIndex = this.snacks.map((snacks) => {
      return snacks.price;
    });

    let snackPrice = snackPriceIndex[position];

    let change = cash - snackPrice;

    let snackNameIndex = this.snacks.map((snacks) => {
      return snacks.name;
    });
    let snackName = snackNameIndex[position];

    let receipt = { name: snackName, change: change };

    if (position > this.snacks.length) {
      console.log("Snack not found");
    } else if (cash < snackPrice) {
      console.log("Your money is not enough, sorry");
    } else {
      console.log(receipt);
    }
  }
}
const vendingMachine = new VendingMachine();

vendingMachine.vend(1, 20);
vendingMachine.vend(0, 20);
vendingMachine.vend(5, 20);
vendingMachine.vend(2, 2);
