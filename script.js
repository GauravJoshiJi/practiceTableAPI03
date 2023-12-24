fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let product = "";

    objectData.map((value, key) => {
      product += `
      <tr>
            <td>${key + 1}</td>
            <td>${value.title}</td>
            <td>${value.price}</td>
            <td>${value.description}</td>
            <td>${value.category}</td>
            <td>${value.rating.rate}</td>
            <td><img src="${value.image}" /></td>
          </tr>`;
    });
    document.getElementById("table_body").innerHTML = product;
  });
