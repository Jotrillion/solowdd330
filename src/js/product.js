<<<<<<< HEAD
import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import productDetails from "./ProductDetails.mjs";

const dataSource = new ExternalServices("products");
=======
import { getParam, getCartCount, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ExternalServices.mjs";
import productDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData();
>>>>>>> ps--discountflag-fixed
const productId = getParam("product");

console.log("Product ID:", productId);

const product = new productDetails(productId, dataSource);
product.init();


