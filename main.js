import { dataDB } from "./js/data.js";
import { printFood, printFoodInCart, cart } from "./js/layout.js";
import "./js/showCart.js";

const contentFood = document.querySelector(".content_food");
const contentCartBody = document.querySelector(".content_cart-body");
let total=0;
function printTotal(
    cart
){
    console.log(cart)
}

// AL INICIAR LA PAGINA, MUESTRO LOS PRODUCTOS QUE TENIA EN EL CARRITO
document.addEventListener('DOMContentLoaded', () => {
    // if (localStorage.getItem('cart')){
    //     console.log('localStorage: ', localStorage.getItem('cart'))
    //     cart = localStorage.getItem('cart')
    //     printFoodInCart(contentCartBody)
    // }
})

//const carttotal = document.querySelector(".content_cart-total")
//        let totaltext = "";
//        let totalnumber = 0;
//        arrayCart.forEach(({ price, amount}) => {
//        let subtotalnumber = price*amount;
//       totalnumber += subtotalnumber;
//       })
//      totaltext += `<h2>Total: $<span id="total">${totalnumber}</span></h2>`;
//        carttotal.innerHTML= totaltext;



// HOME - CUANDO LE DOY CLICK AL BOTON DE AGREGAR
contentFood.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__add")) {
        const idFood = +e.target.parentElement.id;

        const findFood = dataDB.find((item) => item.id === idFood);

        //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        if (cart[idFood]) {
            cart[idFood].amount++;
        } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
            cart[idFood] = findFood;
            cart[idFood].amount = 1;
        }

        printFoodInCart(contentCartBody);
    }
});

// CARRITO - CUANDO LE DOY CLICK A LOS BOTONES DEL ITEM
contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        // ELIMINAR ELEMENTO DEL CARRITO
        const idFood = +e.target.parentElement.id;
        
        if(cart[idFood].amount>1){
            cart[idFood].amount--;
        }
    }

    if (e.target.classList.contains("bx-plus-medical")) {
        // AGREGAR ELEMENTO AL CARRITO
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount++;
    }

    if (e.target.classList.contains("bx-trash")) {
        // ELIMINAR TODOS LOS ELEMENTO DEL ITEM
        const idFood = +e.target.parentElement.id;
        delete cart[idFood];
    }

    printFoodInCart(contentCartBody);
});

printFood(contentFood, dataDB);
printTotal(cart)

