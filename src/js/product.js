import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import productDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("products");
const productId = getParam("product");

const product = new productDetails(productId, dataSource);
product.init();
loadHeaderFooter();

