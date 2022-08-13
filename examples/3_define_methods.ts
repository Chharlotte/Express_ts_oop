class Sale {
  private amount: number;

  private listAmount: number[] = [];

  constructor(initAmount: number) {
    this.amount = initAmount;
    this.listAmount.push(initAmount);
  }

  public addProduct(price: number): void {
    //Void indica que no retorna nada
    this.amount += price;
    this.listAmount.push(price);
  }
  public removeProduct(price: number): void {
    //Void indica que no retorna nada
    this.amount -= price;
    const i = this.listAmount.findIndex((item) => item === price);

    this.listAmount = this.listAmount.filter((_item, j) => j !== i);
  }

  public getTotal(): number {
    return this.amount;
  }

  public getList(): number[] {
    return this.listAmount;
  }
}
const sale = new Sale(100);

sale.addProduct(150);
sale.removeProduct(100);

//sale.amount = 0; //El codigo es vulnerable, la compra puede quedar en 0 si el codigo no esta protegido

console.log('sale.amount', sale.getTotal());
console.log('sale.list', sale.getList());
