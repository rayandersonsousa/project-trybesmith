import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/productsInterfaces';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerNewProduct(product: IProducts) {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    const newProduct = { id: insertId, ...product };

    return newProduct;
  }

  public async getAll(): Promise<IProducts[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const products = await this.connection.execute(query);
    const [rows] = products;

    return rows as IProducts[];
  }
}