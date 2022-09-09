let cart = {};

// ACTUALIZAR CARRITO
function printFoodInCart(elementHTML) {
    let html = "";

    const arrayCart = Object.values(cart);
    console.log('arrayCart: ', arrayCart)

    arrayCart.forEach(({ id, name, urlImages, amount }) => {
        html += `
            <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${urlImages}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                    <i class='bx bx-minus'></i>
                    <span id="amount">${amount}</span>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        `;
        // localStorage.setItem('cart', JSON.stringify(cart))
    });

    elementHTML.innerHTML = html;
    // GUARDO EN EL STORAGE PARA NO PERDER AL HACER F5

    // actualizamos con la longitud del carrito.
    //countCart.innerText = cart.length 

    //precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.
    
}

function printFood(elementHTML, data) {
    console.log('printFood')

    let html = "";

    data.forEach(({ id, name, price, stock, urlImages }) => {
        html += `
        <div class="food">
            <div class="food__img">
                <img src="${urlImages}" alt="${name}">
            </div>
            <div class="food__body" id="${id}">
                <h2 class="food__body-title">${name}</h2>
                <p>precio: ${price}</p>
                <p>stock: ${stock}</p>
                <button class="btn btn__add">Agregar</button>
            </div>
        </div>
    `;
    });

    elementHTML.innerHTML = html;
}

export { printFoodInCart, printFood, cart };
