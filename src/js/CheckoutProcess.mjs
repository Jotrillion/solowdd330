import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {

    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector
        
        
               
    }

    calcSubtotal() {
       
        const cartInventory = getLocalStorage("so-cart") || [];
        let subtotal = 0;
        let totalItems = 0;
        cartInventory.forEach(item => {
            subtotal += (item.FinalPrice) * (item.quantity);
            totalItems += (item.quantity);
            
           
            
        });
         document.getElementById("subtotal").innerHTML = `Subtotal: ${subtotal.toFixed(2)}`;
        return { subtotal, totalItems };
    }
    
    calcTotal(subtotal, totalItems) {
        const tax = subtotal * .06;
        const subtotalWithTax = subtotal + tax;
        const shipping = 10 + (2 * (totalItems - 1));
        const total = subtotalWithTax + shipping;

        document.getElementById("tax").innerHTML = `Tax: ${tax}`;
        document.getElementById("shipping").innerHTML = `Shipping: ${shipping}`;
        document.getElementById("total").innerHTML = `Total: ${total}`;
        return total;

    }

    init() {
        this.calcSubtotal();
        this.calcTotal(subtotal, totalItems);
    }


}