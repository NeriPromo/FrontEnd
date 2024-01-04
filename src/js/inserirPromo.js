const API_URL= 'https://backend-lemon-psi.vercel.app/api'

function loadPromotions() {
  fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      const listProducts = document.getElementById("list-produts");
      listProducts.innerHTML = "";
      console.log(data);
      data.data.reverse();

      data.data.forEach((product) => {
        const productLink = document.createElement("a");
        productLink.setAttribute("href", `product.html?id=${product.id}`);
        productLink.setAttribute("aria-label", "link produto")

        const produtsItens = document.createElement("div");
        produtsItens.classList.add("product-item");

        const containerImg = document.createElement("div");
        containerImg.classList.add("container-img");

        const itensTitle = document.createElement("h3");
        itensTitle.classList.add("title");
        itensTitle.innerText = product.title;

        const itensValue = document.createElement("p");
        const formattedPrice = parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        itensValue.innerText = formattedPrice;
        itensValue.classList.add("price");

        const partner_store = document.createElement("img");
        partner_store.classList.add("partner_store");
        switch (product.partner_store) {
          case "amazon":
            partner_store.src = "src/img/amazon.svg";
            partner_store.setAttribute("alt", "loja amazon")
            partner_store.setAttribute("width", "100px")
            partner_store.setAttribute("height", "100px")
            break;
          case "mercadolivre":
            partner_store.src = "/src/img/meli.svg";
            partner_store.setAttribute("alt", "loja mercado livre")
            partner_store.setAttribute("width", "100px")
            partner_store.setAttribute("height", "100px")
            break;
          case "magazine":
            partner_store.src = "/src/img/magalu.svg";
            partner_store.setAttribute("alt", "loja magazine luiza")
            partner_store.setAttribute("width", "100px")
            partner_store.setAttribute("height", "100px")
            break;
          case "shopee":
            partner_store.src = "/src/img/shopee.svg";
            partner_store.setAttribute("alt", "loja shopee")
            partner_store.setAttribute("width", "100px")
            partner_store.setAttribute("height", "100px")
            break;
          case "aliexpress":
            partner_store.src = "/src/img/aliexpress.svg";
            partner_store.setAttribute("alt", "loja aliexpress")
            partner_store.setAttribute("width", "100px")
            partner_store.setAttribute("height", "100px")
            break;
        }

        produtsItens.append(
          containerImg,
          itensTitle,
          itensValue,
          partner_store
        );
        productLink.append(produtsItens);

        const itensImg = document.createElement("img");
        itensImg.classList.add("itens-img");
        itensImg.src = product.image;
        itensImg.alt = "Foto do produto"

        containerImg.append(itensImg);

        listProducts.append(productLink);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar as promoções:", error);
    });
}

function filterProduct() {
  const promo = document.getElementById("list-itens").value;

  switch (promo) {
    case "ultimasPromocoes":
      loadLastProducts();
      break;

    case "promocoesAntigas":
      loadOlderPromo();
      break;

    case "melhoresPrecos":
      loadBestPrice();
  }
}

function loadLastProducts() {
  fetch(`${API_URL}/products/lastent`)
    .then((response) => response.json())
    .then((data) => {
      const listProducts = document.getElementById("list-produts");
      listProducts.innerHTML = "";

      data.data.forEach((product) => {
        const productLink = document.createElement("a");
        productLink.setAttribute("href", `product.html?id=${product.id}`);

        const produtsItens = document.createElement("div");
        produtsItens.classList.add("product-item");

        const containerImg = document.createElement("div");
        containerImg.classList.add("container-img");

        const itensTitle = document.createElement("h3");
        itensTitle.classList.add("title");
        itensTitle.innerText = product.title;

        const itensValue = document.createElement("p");
        const formattedPrice = parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        itensValue.innerText = formattedPrice;
        itensValue.classList.add("price");

        const partner_store = document.createElement("img");
        partner_store.classList.add("partner_store");
        switch (product.partner_store) {
          case "amazon":
            partner_store.src = "/src/img/amazon.png";
            break;
          case "kabum":
            partner_store.src = "/src/img/kabum.svg";
            break;
          case "nike":
            partner_store.src = "/src/img/nike.svg";
            break;
          case "mercadolivre":
            partner_store.src = "/src/img/meli.svg";
            break;
          case "magazine":
            partner_store.src = "/src/img/magalu.svg";
            break;
          case "terabyte":
            partner_store.src = "/src/img/terabyte.svg";
            break;
          case "shopee":
            partner_store.src = "/src/img/shopee.svg";
            break;
          case "aliexpress":
            partner_store.src = "/src/img/aliexpress.svg";
            break;
          case "dafiti":
            partner_store.src = "/src/img/dafiti.svg";
            break;
          case "renner":
            partner_store.src = "/src/img/renner.svg";
            break;
          case "kanui":
            partner_store.src = "/src/img/kanui.svg";
            break;
          case "xiaomi":
            partner_store.src = "/src/img/xiaomi.svg";
            break;
          case "polishop":
            partner_store.src = "/src/img/polishop.svg";
            break;
          case "mobly":
            partner_store.src = "/src/img/mobly.svg";
            break;
          case "decathlon":
            partner_store.src = "/src/img/decathlon.svg";
            break;
          case "lenovo":
            partner_store.src = "/src/img/lenovo.svg";
            break;
        }

        produtsItens.append(
          containerImg,
          itensTitle,
          itensValue,
          partner_store
        );
        productLink.append(produtsItens);

        const itensImg = document.createElement("img");
        itensImg.classList.add("itens-img");
        itensImg.src = product.image;

        containerImg.append(itensImg);

        listProducts.append(productLink);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar as promoções:", error);
    });
}

function loadOlderPromo() {
  fetch(`${API_URL}/products/old`)
    .then((response) => response.json())
    .then((data) => {
      const listProducts = document.getElementById("list-produts");
      listProducts.innerHTML = "";

      data.data.forEach((product) => {
        const productLink = document.createElement("a");
        productLink.setAttribute("href", `product.html?id=${product.id}`);

        const produtsItens = document.createElement("div");
        produtsItens.classList.add("product-item");

        const containerImg = document.createElement("div");
        containerImg.classList.add("container-img");

        const itensTitle = document.createElement("h3");
        itensTitle.classList.add("title");
        itensTitle.innerText = product.title;

        const itensValue = document.createElement("p");
        const formattedPrice = parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        itensValue.innerText = formattedPrice;
        itensValue.classList.add("price");

        const partner_store = document.createElement("img");
        partner_store.classList.add("partner_store");
        switch (product.partner_store) {
          case "amazon":
            partner_store.src = "/src/img/amazon.png";
            break;
          case "kabum":
            partner_store.src = "/src/img/kabum.svg";
            break;
          case "nike":
            partner_store.src = "/src/img/nike.svg";
            break;
          case "mercadolivre":
            partner_store.src = "/src/img/meli.svg";
            break;
          case "magazine":
            partner_store.src = "/src/img/magalu.svg";
            break;
          case "terabyte":
            partner_store.src = "/src/img/terabyte.svg";
            break;
          case "shopee":
            partner_store.src = "/src/img/shopee.svg";
            break;
          case "aliexpress":
            partner_store.src = "/src/img/aliexpress.svg";
            break;
          case "dafiti":
            partner_store.src = "/src/img/dafiti.svg";
            break;
          case "renner":
            partner_store.src = "/src/img/renner.svg";
            break;
          case "kanui":
            partner_store.src = "/src/img/kanui.svg";
            break;
          case "xiaomi":
            partner_store.src = "/src/img/xiaomi.svg";
            break;
          case "polishop":
            partner_store.src = "/src/img/polishop.svg";
            break;
          case "mobly":
            partner_store.src = "/src/img/mobly.svg";
            break;
          case "decathlon":
            partner_store.src = "/src/img/decathlon.svg";
            break;
          case "lenovo":
            partner_store.src = "/src/img/lenovo.svg";
            break;
        }

        produtsItens.append(
          containerImg,
          itensTitle,
          itensValue,
          partner_store
        );
        productLink.append(produtsItens);

        const itensImg = document.createElement("img");
        itensImg.classList.add("itens-img");
        itensImg.src = product.image;

        containerImg.append(itensImg);

        listProducts.append(productLink);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar as promoções:", error);
    });
}

function loadBestPrice() {
  fetch(`${API_URL}/products/best`)
    .then((response) => response.json())
    .then((data) => {
      const listProducts = document.getElementById("list-produts");
      listProducts.innerHTML = "";

      data.data.forEach((product) => {
        const productLink = document.createElement("a");
        productLink.setAttribute("href", `product.html?id=${product.id}`);

        const produtsItens = document.createElement("div");
        produtsItens.classList.add("product-item");

        const containerImg = document.createElement("div");
        containerImg.classList.add("container-img");

        const itensTitle = document.createElement("h3");
        itensTitle.classList.add("title");
        itensTitle.innerText = product.title;

        const itensValue = document.createElement("p");
        const formattedPrice = parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        itensValue.innerText = formattedPrice;
        itensValue.classList.add("price");

        const partner_store = document.createElement("img");
        partner_store.classList.add("partner_store");
        switch (product.partner_store) {
          case "amazon":
            partner_store.src = "/src/img/amazon.png";
            break;
          case "kabum":
            partner_store.src = "/src/img/kabum.svg";
            break;
          case "nike":
            partner_store.src = "/src/img/nike.svg";
            break;
          case "mercadolivre":
            partner_store.src = "/src/img/meli.svg";
            break;
          case "magazine":
            partner_store.src = "/src/img/magalu.svg";
            break;
          case "terabyte":
            partner_store.src = "/src/img/terabyte.svg";
            break;
          case "shopee":
            partner_store.src = "/src/img/shopee.svg";
            break;
          case "aliexpress":
            partner_store.src = "/src/img/aliexpress.svg";
            break;
          case "dafiti":
            partner_store.src = "/src/img/dafiti.svg";
            break;
          case "renner":
            partner_store.src = "/src/img/renner.svg";
            break;
          case "kanui":
            partner_store.src = "/src/img/kanui.svg";
            break;
          case "xiaomi":
            partner_store.src = "/src/img/xiaomi.svg";
            break;
          case "polishop":
            partner_store.src = "/src/img/polishop.svg";
            break;
          case "mobly":
            partner_store.src = "/src/img/mobly.svg";
            break;
          case "decathlon":
            partner_store.src = "/src/img/decathlon.svg";
            break;
          case "lenovo":
            partner_store.src = "/src/img/lenovo.svg";
            break;
        }

        produtsItens.append(
          containerImg,
          itensTitle,
          itensValue,
          partner_store
        );
        productLink.append(produtsItens);

        const itensImg = document.createElement("img");
        itensImg.classList.add("itens-img");
        itensImg.src = product.image;

        containerImg.append(itensImg);

        listProducts.append(productLink);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar as promoções:", error);
    });
}

function filterPromo(inputSelector) {
  fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .then((data) => {
      const listProducts = document.getElementById("list-produts");
      listProducts.innerHTML = "";

      const inputSearch = document.querySelector(inputSelector).value.toLowerCase();

      const filterResult = data.data.filter((product) =>
        product.title.toLowerCase().includes(inputSearch)
      );

      if (filterResult.length === 0) {
        const noProduct = document.createElement("h2");
        noProduct.innerText = "Nenhum Produto Encontrado!";
        noProduct.classList.add("noProduct");

        listProducts.append(noProduct);
      } else {
        filterResult.forEach((product) => {
          const productLink = document.createElement("a");
          productLink.setAttribute("href", `product.html?id=${product.id}`);

          const produtsItens = document.createElement("div");
          produtsItens.classList.add("product-item");

          const containerImg = document.createElement("div");
          containerImg.classList.add("container-img");

          const itensTitle = document.createElement("h3");
          itensTitle.classList.add("title");
          itensTitle.innerText = product.title;

          const itensValue = document.createElement("p");
          const formattedPrice = parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          itensValue.innerText = formattedPrice;
          itensValue.classList.add("price");

          const partner_store = document.createElement("img");
          partner_store.classList.add("partner_store");
          switch (product.partner_store) {
            case "amazon":
              partner_store.src = "/src/img/amazon.png";
              break;
            case "kabum":
              partner_store.src = "/src/img/kabum.svg";
              break;
            case "nike":
              partner_store.src = "/src/img/nike.svg";
              break;
            case "mercadolivre":
              partner_store.src = "/src/img/meli.svg";
              break;
            case "magazine":
              partner_store.src = "/src/img/magalu.svg";
              break;
            case "terabyte":
              partner_store.src = "/src/img/terabyte.svg";
              break;
            case "shopee":
              partner_store.src = "/src/img/shopee.svg";
              break;
            case "aliexpress":
              partner_store.src = "/src/img/aliexpress.svg";
              break;
            case "dafiti":
              partner_store.src = "/src/img/dafiti.svg";
              break;
            case "renner":
              partner_store.src = "/src/img/renner.svg";
              break;
            case "kanui":
              partner_store.src = "/src/img/kanui.svg";
              break;
            case "xiaomi":
              partner_store.src = "/src/img/xiaomi.svg";
              break;
            case "polishop":
              partner_store.src = "/src/img/polishop.svg";
              break;
            case "mobly":
              partner_store.src = "/src/img/mobly.svg";
              break;
            case "decathlon":
              partner_store.src = "/src/img/decathlon.svg";
              break;
            case "lenovo":
              partner_store.src = "/src/img/lenovo.svg";
              break;
          }

          produtsItens.append(
            containerImg,
            itensTitle,
            itensValue,
            partner_store
          );
          productLink.append(produtsItens);

          const itensImg = document.createElement("img");
          itensImg.classList.add("itens-img");
          itensImg.src = product.image;

          containerImg.append(itensImg);

          listProducts.append(productLink);
        });
      }
      hideMenu('menu-search-mobile')
    })
    .catch((error) => {
      console.error("Erro ao carregar as promoções:", error);
    });
}

function filterCategory(category) {
  fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .then((data) => {

      const listProducts = document.getElementById("list-produts");
      listProducts.innerHTML = "";

      const filterResult = data.data.filter((product) =>
        product.category.includes(category)
      );

      const reversedResults = filterResult.reverse();

      if (reversedResults.length === 0) {
        const noProduct = document.createElement("h2");
        noProduct.innerText = "Nenhum Produto Encontrado!";
        noProduct.classList.add("noProduct");

        listProducts.append(noProduct);
      } else {
        reversedResults.forEach((product) => {
          console.log(product)
          const productLink = document.createElement("a");
          productLink.setAttribute("href", `product.html?id=${product.id}`);

          const produtsItens = document.createElement("div");
          produtsItens.classList.add("product-item");

          const containerImg = document.createElement("div");
          containerImg.classList.add("container-img");

          const itensTitle = document.createElement("h3");
          itensTitle.classList.add("title");
          itensTitle.innerText = product.title;

          const itensValue = document.createElement("p");
          const formattedPrice = parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          itensValue.innerText = formattedPrice;
          itensValue.classList.add("price");

          const partner_store = document.createElement("img");
          partner_store.classList.add("partner_store");
          switch (product.partner_store) {
            case "amazon":
              partner_store.src = "/src/img/amazon.png";
              break;
            case "kabum":
              partner_store.src = "/src/img/kabum.svg";
              break;
            case "nike":
              partner_store.src = "/src/img/nike.svg";
              break;
            case "mercadolivre":
              partner_store.src = "/src/img/meli.svg";
              break;
            case "magazine":
              partner_store.src = "/src/img/magalu.svg";
              break;
            case "terabyte":
              partner_store.src = "/src/img/terabyte.svg";
              break;
            case "shopee":
              partner_store.src = "/src/img/shopee.svg";
              break;
            case "aliexpress":
              partner_store.src = "/src/img/aliexpress.svg";
              break;
            case "dafiti":
              partner_store.src = "/src/img/dafiti.svg";
              break;
            case "renner":
              partner_store.src = "/src/img/renner.svg";
              break;
            case "kanui":
              partner_store.src = "/src/img/kanui.svg";
              break;
            case "xiaomi":
              partner_store.src = "/src/img/xiaomi.svg";
              break;
            case "polishop":
              partner_store.src = "/src/img/polishop.svg";
              break;
            case "mobly":
              partner_store.src = "/src/img/mobly.svg";
              break;
            case "decathlon":
              partner_store.src = "/src/img/decathlon.svg";
              break;
            case "lenovo":
              partner_store.src = "/src/img/lenovo.svg";
              break;
          }

          produtsItens.append(
            containerImg,
            itensTitle,
            itensValue,
            partner_store
          );
          productLink.append(produtsItens);

          const itensImg = document.createElement("img");
          itensImg.classList.add("itens-img");
          itensImg.src = product.image;

          containerImg.append(itensImg);

          listProducts.append(productLink);
        });
      }
      hideMenu('categoryMenu')
      hideMenu('menu-mobile')
    })
    .catch((error) => {
      console.error("Erro ao carregar as promoções:", error);
    });
}

// Chame a função para carregar as promoções quando a página for carregada
document.addEventListener("DOMContentLoaded", loadPromotions);
