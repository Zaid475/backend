import { Router } from "express";
import { createProduct, viewProducts } from "../controllers/product.controller.js";

const Productroutes=Router();

Productroutes.post("/create-product",createProduct)
Productroutes.get("/view-products",viewProducts)
// Productroutes.post(`/single-product/{productId}`,createProduct)
// Productroutes.post("/filter-products",filterProducts)
// Productroutes.post("/sort-products",sortProducts)

export default Productroutes; 