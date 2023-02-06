import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import IProducts from '../interfaces/productsInterfaces';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async registerNewProduct(product: IProducts) {
    return this.model.registerNewProduct(product);
  }
}

export default ProductsService;