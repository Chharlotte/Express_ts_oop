class Sale {
  amount: number;

  constructor(initAmount: number) {
    this.amount = initAmount;
  }

  addProduct(price: number) {
    this.amount += price;
  }
}

const sale = new Sale(100);

sale.addProduct(150);

//sale.amount = 0; //El codigo es vulnerable, la compra puede quedar en 0 si el codigo no esta protegido

console.log('sale.amount', sale.amount);
