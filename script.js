function loadPizzas() {
  const pizzaArea = document.querySelector(".pizza-area");

  pizzaJson.forEach(function (pizza, index) {
    const pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true);
    const fmtPrice = formatPrice(pizza.price);
    pizzaItem.querySelector(".pizza-item--name").innerHTML = pizza.name;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `${fmtPrice}`;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = pizza.description;
    pizzaItem.querySelector(".pizza-item--img img").src = pizza.img;
    pizzaItem.querySelector("a").addEventListener("click", (event)=>showPizzaModal(event,index));
    
    pizzaArea.appendChild(pizzaItem);
  });
}

function showPizzaModal(event, index) {
  event.preventDefault();
  const pizzaWindowArea = document.querySelector(".pizzaWindowArea");
  pizzaWindowArea.style.opacity = 0;
  pizzaWindowArea.style.display = "flex";
  setTimeout(()=>pizzaWindowArea.style.opacity = 1, 1);
  
  dataPizzaModal(index);
  
  pizzaWindowArea.querySelector(".pizzaWindowBody .pizzaInfo .pizzaInfo--cancelButton").addEventListener("click", hidePizzaModal);
}

function dataPizzaModal(index) {
  const pizzas = pizzaJson;
  const fmtPrice = formatPrice(pizzas[index].price);
  const pizzaWindowArea = document.querySelector(".pizzaWindowArea");
  const pizzaWindowBody = pizzaWindowArea.querySelector(".pizzaWindowBody");
  const pizzaInfo = pizzaWindowBody.querySelector(".pizzaInfo");
  const pizzaInfoSize = pizzaInfo.querySelector(".pizzaInfo--sizearea .pizzaInfo--sizes");
  const pizzaInfoPrice = pizzaInfo.querySelector(".pizzaInfo--pricearea .pizzaInfo--price");
  
  pizzaWindowBody.querySelector('.pizzaBig img').src = pizzas[index].img;
  pizzaInfo.querySelector('h1').innerHTML = pizzas[index].name;
  pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML = pizzas[index].description;
  pizzaInfoPrice.querySelector('.pizzaInfo--actualPrice').innerHTML = fmtPrice;

  // pizzaInfoSize.querySelector('div')

  console.log(pizzaInfoSize.querySelector('div'));
}

function hidePizzaModal(event) {
  event.preventDefault();
  let pizzaWindowArea = document.querySelector(".pizzaWindowArea");
  pizzaWindowArea.style.display = "none";
}

function formatPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });;
}

loadPizzas();
