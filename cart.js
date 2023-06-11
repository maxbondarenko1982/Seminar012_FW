const templateCart = document.querySelector(".template__cart").innerHTML;
const cartData = [];

document.querySelector("body").addEventListener("click", (ev) => {
  if (ev.target.className === "dagger") {
    ev.target.parentElement.remove();
    console.log(document.querySelectorAll(".dagger").length);
    if (document.querySelectorAll(".dagger").length === 0)
      document.querySelector(".cart").remove();
  }
});

document
  .querySelector(".product-box__content")
  .addEventListener("mouseover", (ev) => {
    if (ev.target.className == "product__add") {
      ev.target.onclick = () => {
        if (!document.querySelector(".cart")) {
          const cart = document.createElement("section");
          cart.classList.add("cart");
          cart.classList.add("center");
          const h2 = document.createElement("h2");
          h2.classList.add("cart__heading");
          h2.textContent = "Cart Items";
          cart.appendChild(h2);
          document.querySelector(".sale").before(cart);
        }

        cartData.push(productData[ev.target.id - 1]);

        let elem = productData[ev.target.id - 1];
        document.querySelector(".cart").insertAdjacentHTML(
          "beforeend",
          new Templator(templateCart).compile({
            productId: elem.id,
            productImg: elem.img,
            productName: elem.name,
            productPrice: elem.price,
            productColor: elem.color,
            productSize: elem.size,
            productQuantity: elem.quantity,
          })
        );
      };
    }
  });
