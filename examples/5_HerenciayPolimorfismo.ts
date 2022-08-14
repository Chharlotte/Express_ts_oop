import { Sale, Product } from '../examples/4_Interfaces';

class SalewithIva extends Sale {
  private iva: number;

  constructor(iva: number, initProduct: Product) {
    super(initProduct);
    this.iva = iva;
  }

  public getTotal() {
    const ivaPorcentaje = this.iva / 100;

    const total = super.getTotal();

    const montoIva = total * ivaPorcentaje;

    return montoIva;
  }
}

const saleIva = new SalewithIva(12, { name: 'oreo', price: 100 });

saleIva.addProduct({ name: 'flips', price: 150 });
saleIva.addProduct({ name: 'toddy', price: 175 });
saleIva.addProduct({ name: 'quesito', price: 250 });

saleIva.removeProduct({ name: 'oreo', price: 100 });

console.log('saleIva.getTotal()', saleIva.getTotal());
console.log('saleIva.getList()', saleIva.getList());
