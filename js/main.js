import produtos from './products.js';

const principalContent = document.querySelector(".js_itens");

const printItens = () => {
  produtos.map(item => {
    const itens = document.createElement("div")
    itens.classList.add("itens")
    itens.innerHTML = `
        <div class="itens-shop">
          <img class="img-item" src=${item.img}>
          <div>
            <h1>${item.name}</h1>
            <p>R$ ${item.price}</p>
          </div>
        </div>
      `

    principalContent.append(itens)
  })
}

printItens()