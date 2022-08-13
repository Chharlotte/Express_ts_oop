export interface Product {
  name: string;
  price: number;
}

export class Sale {
  private amount: number;

  private listAmount: Product[] = [];

  constructor(initProduct: Product) {
    this.amount = initProduct.price;
    this.listAmount.push(initProduct);
  }

  public addProduct(product: Product): void {
    //Void indica que no retorna nada
    this.amount += product.price;
    this.listAmount.push(product);
  }
  public removeProduct(product: Product): void {
    //Void indica que no retorna nada
    this.amount -= product.price;
    const i = this.listAmount.findIndex((item) => item.name === product.name);

    this.listAmount = this.listAmount.filter((_item, j) => j !== i);
  }

  public getTotal(): number {
    return this.amount;
  }

  public getList(): Product[] {
    return this.listAmount;
  }
}
const sale = new Sale({ name: 'oreo', price: 100 });

sale.addProduct({ name: 'flips', price: 150 });
sale.removeProduct({ name: 'oreo', price: 100 });

//sale.amount = 0; //El codigo es vulnerable, la compra puede quedar en 0 si el codigo no esta protegido

console.log('sale.amount', sale.getTotal());
console.log('sale.list', sale.getList());
