function create(event) {
    event.preventDefault();
  
    const title = document.getElementById('titulo-produto').value;
    const link = document.getElementById('link-produto').value;
    const price = document.getElementById('preco').value;
    const partnerStore = document.getElementById('lojas').value;
    const category = document.getElementById('categoria').value;
    const image = document.getElementById('file-input').files[0];
    const description = document.getElementById('description').value;
    const price_Previous = document.getElementById('price_Previous').value
  
    const product = new FormData();
    product.append('title', title);
    product.append('link', link);
    product.append('price', price);
    product.append('partner_store', partnerStore);
    product.append('category', category);
    product.append('image', image);
    product.append('description', description);
    product.append('price_Previous', price_Previous)
  
    console.log(product)
    const requestOptions = {
      method: 'POST',
      body: product
    };
  
    fetch("https://backend-lemon-psi.vercel.app/api/products", requestOptions)
      .then(function (response) {
        if (response.ok) {
          console.log('Promoção inserida com sucesso');
          document.getElementById('titulo-produto').value = '';
          document.getElementById('link-produto').value = '';
          document.getElementById('preco').value = '';
          document.getElementById('lojas').value = '';
          document.getElementById('categoria').value = '';
          document.getElementById('file-input').value = '';
          document.getElementById('description').value = '';
          document.getElementById('price_Previous').value = '';
        } else {
          console.log('Erro ao inserir a promoção');
        }
      })
      .catch(function (err) {
        console.log('Erro ao enviar a requisição', err);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const armazenar = document.getElementById('armazenar');
    armazenar.addEventListener('click', create);
  });
  
function deletePromo(event) {
    event.preventDefault();
  
    const id = document.getElementById('productId').value;
  
    if (!id) {
      console.log('Por favor, insira um ID válido.');
      return;
    }
  
    const requestOptions = {
      method: 'DELETE',
    };
  
    fetch(`https://backend-lemon-psi.vercel.app/api/products/${id}`, requestOptions)
      .then(function (response) {
        if (response.ok) {
          console.log(`Registro com ID ${id} excluído com sucesso`);
          alert(`Registro com ID ${id} excluído com sucesso`);
          document.getElementById('productId').value = '';
        } else {
          console.log(`Erro ao excluir o registro com ID ${id}`);
          alert(`Erro ao excluir o registro com ID ${id}`);
        }
      })
      .catch(function (err) {
        console.error('Erro ao enviar a requisição', err);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', deletePromo);
  });
  