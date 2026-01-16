import { getLocalStorage } from "./utils.mjs";

export function getCartCount() {
    const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
    return cart.length;
}

const count = getCartCount();
document.getElementById("counter").innerText = count;