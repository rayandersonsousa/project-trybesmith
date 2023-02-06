import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public registerNewProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productsService.registerNewProduct(product);

    return res.status(201).json(newProduct);
  };
}

export default ProductsController;