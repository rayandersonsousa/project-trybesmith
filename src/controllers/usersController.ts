import { Request, Response } from 'express';
import UsersService from '../services/usersService';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public addUser = async (req: Request, res: Response) => {
    const newUser = req.body;

    const token = await this.usersService.addUser(newUser);

    return res.status(201).json({ token });
  };
}

export default UsersController;