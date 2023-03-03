const prices: (number | string)[] = [1, 2, 3, 4, "hola"];

prices.push(4);
prices.push("hola");

let user: [string, number, boolean];
// user = ["nicobyte", 15];
// user = [20, 15];

// user = [];
// user = ["jahiker"];
// user = ["jahiker", 12];
user = ["jahiker", 12, true];

const [username, age] = user;
console.log(username)
console.log(age)
