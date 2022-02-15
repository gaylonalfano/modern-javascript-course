const productsUlElement = document.querySelector(".products");
const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 10 },
  { name: "red shell", price: 40 },
  { name: "mushroom", price: 50 },
  { name: "banana skin", price: 5 },
];

// const filtered = products.filter((p) => p.price > 20);

// const promos = filtered.map((p) => {
//   return `${p.name} is now on sale for ${p.price}!`;
// });

// Or chain methods
products
  .filter((p) => p.price > 20)
  .map((p) => {
    return `${p.name} is now on sale for ${p.price}!`;
  })
  .forEach((p) => {
    productsUlElement.innerHTML += `<li>${p}</li>`;
  });
