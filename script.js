function loadPizzas() {
  let pizzaArea = document.querySelector(".pizza-area");

  pizzaJson.forEach(function (pizza) {
    // const div = document.createElement("div");
    // let html = `
    // <div class="pizza-item">
    //   <a href="">
    //       <div class="pizza-item--img"><img src="${pizza.img}" /></div>
    //       <div class="pizza-item--add">+</div>
    //   </a>
    //   <div class="pizza-item--price">${formatPrice(pizza.price)}</div>
    //   <div class="pizza-item--name">${pizza.name}</div>
    //   <div class="pizza-item--desc">${pizza.description}</div>
    // </div>`;
    // div.innerHTML = html;
    
    // pizzaArea.appendChild(div);

    const pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true);
    const fmtPrice = formatPrice(pizza.price);
    pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `${fmtPrice}`;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;
    pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
    
    pizzaArea.appendChild(pizzaItem);
  });
}

function formatPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });;
}

loadPizzas();
