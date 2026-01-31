<<<<<<< HEAD
import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

// const dataSource = new ExternalServices("tents");

// const element = document.querySelector(".product-list");

// const productList = new ProductList("Tents", dataSource, element);



// productList.init();
loadHeaderFooter();


=======
import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

console.log("INDEX JS CARREGADO");

const params = new URLSearchParams(window.location.search);

if (getParam("checkout") === "success") {
  const successMessage = document.getElementById("checkout-success");

  if (successMessage) {
    successMessage.hidden = false;
    history.replaceState({}, "", "/index.html");
    setTimeout(() => {
        successMessage.hidden = true;
      }, 5000);
    
  }
}
>>>>>>> ps--discountflag-fixed
