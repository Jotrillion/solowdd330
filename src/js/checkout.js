<<<<<<< HEAD

import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();



=======
import { loadHeaderFooter, isCardExpired } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

>>>>>>> ps--discountflag-fixed
const checkoutProcess = new CheckoutProcess("so-cart", "#checkoutData");
checkoutProcess.init();

const checkoutForm = document.getElementById("checkout-form");
<<<<<<< HEAD

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
   
    checkoutProcess.checkout(checkoutForm);
   
    

=======
const expInput = document.querySelector('[name="expiration"]');


checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isCardExpired(expInput.value)) {
    expInput.setCustomValidity("Card has expired");
  } else {
    expInput.setCustomValidity("");
  }

  const form = document.forms[0];

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  checkoutProcess.checkout();
});

expInput.addEventListener("input", () => {
  expInput.setCustomValidity("");
>>>>>>> ps--discountflag-fixed
});
