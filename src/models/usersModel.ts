import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/usersInterfaces';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addUser(user: IUsers) {
    const { username, vocation, level, password } = user;
    
    const query = `INSERT INTO Trybesmith.users
     (username, vocation, level, password) VALUES (?, ?, ?, ?)`;

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);

    return { id: insertId, ...user };
  }
}