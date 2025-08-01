import express from 'express';
import Product from '../models/Product.js';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getAllProductsCategoryWise } from '../controllers/productController.js';
const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/category', getAllProductsCategoryWise);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
