function filterPrice(value) {
  return value >= 30;
}

let price = [12, 30, 45, 130, 4, 8, 56].filter(filterPrice);

console.log(price);

module.export = filterPrice;
