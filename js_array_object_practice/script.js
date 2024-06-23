let product_1 = {
  name: "book",
  price: 55,
  count: 5,
};
let product_2 = {
  name: "notebook",
  price: 15,
  count: 4,
};
let product_3 = {
  name: "pen",
  price: 55,
  count: 8,
};

let card = {
  products: [],
  add: function (product) {
    this.products.push(product);
  },
  delete: function () {
    this.products.pop();
  },
  sum: function () {
    let sum = 0;
    for (let i of this.products) {
      let sumProduct = i.price * i.count;
      sum = sum + sumProduct;
    }
    return sum;
  },
};
card.add(product_1);
card.add(product_2);
card.add(product_3);

console.log(card.sum());
 // card.delete(product_1);
// card.delete(product_3);
// console.log(card.products);
