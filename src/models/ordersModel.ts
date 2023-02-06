import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/ordersInterfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `SELECT
      orders.id as id,
      orders.user_id as userId,
      JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders
    JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY orders.id,
      orders.user_id;`;

    const orders = await this.connection.execute(query);

    const [rows] = orders;

    return rows as IOrders[];
  }
}