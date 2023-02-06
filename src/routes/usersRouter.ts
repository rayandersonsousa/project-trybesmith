import { Router } from 'express';
import UsersController from '../controllers/usersController';

const router = Router();

const usersController = new UsersController();

router.post('/', usersController.addUser);

export default router;