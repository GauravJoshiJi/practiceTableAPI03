fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let product = "";

    objectData.map((value, key) => {
      let stars = Math.round(value.rating.rate);
      var starsVal;
      switch (stars) {
        case 1:
          //   console.log("*");
          starsVal = "⭐";
          break;
        case 2:
          starsVal = "⭐⭐";
          break;
        case 3:
          starsVal = "⭐⭐⭐";
          break;
        case 4:
          starsVal = "⭐⭐⭐⭐";
          break;
        default:
          starsVal = "⭐⭐⭐⭐⭐";
      }

      product += `
      <tr>
            <td>${key + 1}</td>
            <td>${value.title}</td>
            <td>₹ ${value.price}</td>
            <td>${value.description}</td>
            <td>${value.category}</td>
            <td>${starsVal}</td>
            <td><img src="${value.image}" /></td>
          </tr>`;
    });

    document.getElementById("table_body").innerHTML = product;
  });
