const sum = require("./sum.js");
describe("Тестирование функции sum", () => {
  it("Суммирование положительных чисел", () => {
    expect(sum(1, 4)).toBe(5);
    expect(sum(1, 4)).toEqual(5);
  });
  it("результат на значение меньше и больше", () => {
    expect(sum(1, 4)).toBeGreaterThan(4); // ожидаем значение меньше 8
    expect(sum(1, 4)).toBeLessThan(6); // ожидаем значение больше 16
  });
  it("результат на значение меньше и больше", () => {
    expect(sum(1, -2)).toBeLessThan(0); // ожидаем значение больше 16
  });
});
