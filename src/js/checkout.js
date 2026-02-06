import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const checkoutProcess = new CheckoutProcess("so-cart", "#checkoutData");
checkoutProcess.init();

const checkoutForm = document.getElementById("checkout-form");
const checkoutSubmit =
  document.querySelector("#checkoutSubmit") ||
  document.querySelector("#checkout-btn");

checkoutSubmit?.addEventListener("click", (e) => {
  e.preventDefault();
  const myForm = document.forms[0];
  const chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if (chk_status) {
    checkoutProcess.checkout(myForm);
  }
});
