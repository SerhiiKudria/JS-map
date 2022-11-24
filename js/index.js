//Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
const array = [
  [1, "first"],
  [3, "third"],
];
//Створіть колекцію Map з цього масиву.
const map = new Map(Object.entries(array));
console.log("map", map);
//Отримайте список ключів та значень окремо.
const myArrKeys = [...map.keys()];
console.log("myArrKeys", myArrKeys);
const myArrValues = [...map.values()];
console.log("myArrValues", myArrValues);
//Отримайте кількість елементів.
const count = map.size;
console.log("count", count);
//Додати та видалити елемент
map.set("new key", [2, "value"]);
console.log("map", map);
map.delete("0");
console.log("map", map);
//Здійсніть пошук за ключом
const el = map.get("1");
console.log("el", el);
