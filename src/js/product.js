
function loadProduct() {
  const id = getProductIdFromUrl();
  
    fetch(`${API_URL}/products/${id}`)
      .then(response => response.json())
      .then(productData => {
  
        const container = document.getElementById('container');
  
        const product = document.createElement('div');
        product.classList.add('product-img');
  
        const productImg = document.createElement('img');
        productImg.src = productData.data[0].image; 
  
        product.appendChild(productImg);
  
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
  
        const productTitle = document.createElement('h1');
        productTitle.classList.add('product-info-title');
        productTitle.innerText = productData.data[0].title;
  
        const productPricePrevious = document.createElement('p');
        productPricePrevious.classList.add('product-info-price_previous');
        const formattedPricePrivious = parseFloat(productData.data[0].price_Previous).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        productPricePrevious.innerText = formattedPricePrivious
   
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-info-price');
        const formattedPrice = parseFloat(productData.data[0].price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        productPrice.innerText = formattedPrice;
  
        const button = document.createElement('button');
        const link = document.createElement('a')
        link.innerHTML = "Ir a Loja";
        
        link.setAttribute("href", productData.data[0].link)

        const productShare = document.createElement('div');
        productShare.classList.add('productShare');

        const buttonShare = document.createElement('button')
        buttonShare.textContent = "Compartilhar"

        const partnerPromo = document.createElement('div')
        partnerPromo.classList.add('partnerPromo')

        const partnerText = document.createElement('p')
        partnerText.textContent = "Promoção da loja:"

        const partnerImg = document.createElement('img')
        partnerImg.classList.add('partnerImg')
        partnerImg.src = "/src/img/amazon2.png"
        switch (productData.data[0].partner_store) {
          case "amazon":
            partnerImg.src = "/src/img/amazon.png";
            break;
          case "kabum":
            partnerImg.src = "/src/img/kabum.svg";
            break;
          case "nike":
            partnerImg.src = "/src/img/nike.svg";
            break;
          case "mercadolivre":
            partnerImg.src = "/src/img/meli.svg";
            break;
          case "magazine":
            partnerImg.src = "/src/img/magalu.svg";
            break;
          case "terabyte":
            partnerImg.src = "/src/img/terabyte.svg";
            break;
          case "shopee":
            partnerImg.src = "/src/img/shopee.svg";
            break;
          case "aliexpress":
            partnerImg.src = "/src/img/aliexpress.svg";
            break;
          case "dafiti":
            partnerImg.src = "/src/img/dafiti.svg";
            break;
          case "renner":
            partnerImg.src = "/src/img/renner.svg";
            break;
          case "kanui":
            partnerImg.src = "/src/img/kanui.svg";
            break;
          case "xiaomi":
            partnerImg.src = "/src/img/xiaomi.svg";
            break;
          case "polishop":
            partnerImg.src = "/src/img/polishop.svg";
            break;
          case "mobly":
            partnerImg.src = "/src/img/mobly.svg";
            break;
          case "decathlon":
            partnerImg.src = "/src/img/decathlon.svg";
            break;
          case "lenovo":
            partnerImg.src = "/src/img/lenovo.svg";
            break;
        }

        partnerPromo.append(partnerText, partnerImg)

        productShare.append(buttonShare, partnerPromo)
        

        button.appendChild(link)
        
        const productWarning = document.createElement('p');
        productWarning.classList.add('product-info-warning');
        productWarning.innerText = 'O preço dos produtos podem variar de acordo com a disponibilidade da loja. As ofertas são por tempo limitado e determinado pelas lojas.';
  
        productInfo.append(productTitle, productPricePrevious, productPrice, button, productWarning);
  
        container.append(product, productInfo, productShare);

        const details = document.getElementById('details')

        const textDetails = document.createElement('p')
        textDetails.textContent = productData.data[0].description

        details.appendChild(textDetails)
      })
      .catch(error => {
        console.error('Erro ao carregar o produto:', error);
      });
}

loadProduct();
  

function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  return productId;
}

function redirecionarParaOutraPagina() {
  window.location.href = 'index.html';
}