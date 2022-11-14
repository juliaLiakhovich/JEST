const filterPrice = require("./testNum.js");
describe("Тестирование граничных условий для 30", () => {
  it("Граница значений > =30", () => {
    expect(filterPrice(30)).toBe(true);
  });
});
