import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();

router.post('/', productsController.registerNewProduct);
router.get('/', productsController.getAll);

export default router;