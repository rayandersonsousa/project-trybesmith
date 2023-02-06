import connection from '../models/connection';
import IUsers from '../interfaces/usersInterfaces';
import UsersModel from '../models/usersModel';
import generateToken from '../utils/jwt';
import Ijwt from '../interfaces/jwtInterfaces';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async addUser(user: IUsers) {
    const newUser = await this.model.addUser(user);
    const { username } = newUser;

    const payload: Ijwt = { username };
    const token = generateToken(payload);

    return token;
  }
}

export default UsersService;