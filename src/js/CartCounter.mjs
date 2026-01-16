import { getCartCount } from "./utils.mjs";


const count = getCartCount();

if (count > 0) {
    const counter = document.createElement("div");
    counter.id = "counter";
    counter.textContent = count;
    document.querySelector(".cart").prepend(counter);
}
else {
    counter.removeAttribute("data-hidden");
 }
