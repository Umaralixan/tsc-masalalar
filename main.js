// 1 masala
// const users = [
//   { id: 1, name: "dildora", role: "admin" },
//   { id: 2, name: "dilnura", role: "user" },
//   { id: 3, name: "dilbar", role: "admin" },
// ];
// const admins = users.filter((user) => user.role === "admin");
// console.log(admins);
// 2 masala
// type ProductType = {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   finalPrice?: number;
// };
// const products: ProductType[] = [
//   { id: 1, name: "Olma", price: 27000, discountPrice: 20000 },
//   { id: 2, name: "Olma", price: 50000, discountPrice: 38000 },
//   { id: 3, name: "Olma", price: 9000, discountPrice: 7000 },
// ];
// function fn(arr: ProductType[]): ProductType[] {
//   return arr.reduce((prevValue: ProductType[], item: ProductType) => {
//     const data: ProductType = {
//       ...item,
//       finalPrice: item.price - item.discountPrice,
//     };
//     prevValue.push(data);
//     return prevValue;
//   }, []);
// }
// const res = fn(products);
// console.log(res);
// 3 masala
// const students = [
//   { name: "Maxsuma", scores: [80, 90, 100] },
//   { name: "Durdona", scores: [70, 75, 85] },
//   { name: "Dilnura", scores: [60, 65, 70] },
// ];
// const result = students.map((student) => {
//   const avg =
//     student.scores.reduce((sum, score) => sum + score, 0) /
//     student.scores.length;
//   return {
//     ...student,
//     average: avg,
//   };
// });console.log(result);
// 4 masala
// const items = [
//   { name: "A", price: 100 },
//   { name: "B" },
//   { name: "C", price: 50 },
//   { name: "D" },
// ];
// const result = items.filter((item) => "price" in item);
// console.log(result);
// 5 masala
// const orders = [
//   {
//     id: 1,
//     items: [
//       { price: 100, qty: 2 },
//       { price: 50, qty: 1 },
//     ],
//   },
//   {
//     id: 2,
//     items: [
//       { price: 200, qty: 1 },
//       { price: 30, qty: 3 },
//     ],
//   },
// ];
// const result = orders.filter((order) => {
//   const total = order.items.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );
//   return total > 200;
// });console.log(result);
// 6 masala
// const users = [
//   { id: 1, name: "Umarali", city: "Tashkent" },
//   { id: 2, name: "Ismoil", city: "Samarkand" },
//   { id: 3, name: "Mustafo", city: "Tashkent" },
// ];
// const result = users.filter((user) => user.city === "Tashkent");
// console.log(result);
// 7 masala
// const users = [
//   { id: 1, name: "Umarali", isActive: true },
//   { id: 2, name: "Ismoil", isActive: false },
//   { id: 3, name: "Mustafo", isActive: true },
// ];
// const result = users.filter((user) => user.isActive === true);
// console.log(result);
// 8 masala
// const products = [
//   { name: "olma", category: "tech" },
//   { name: "anor", category: "tech" },
//   { name: "banan", category: "food" },
// ];
// const result = products.reduce((arr, product) => {
//   if (!arr[product.category]) {
//     arr[product.category] = [];
//   }
//   arr[product.category].push(product);
//   return arr;
// }, {});
// console.log(result);
// 9 masala
// const employees = [
//   { firstName: "Umarali", lastName: "Nurmurodov" },
//   { firstName: "Ismoil", lastName: "Suyunov" },
// ];
// const result = employees.map((emp) => ({
//   ...emp,
//   fullName: `${emp.firstName} ${emp.lastName}`,
// }));
// console.log(result);
// 10 masala
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const result = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
// console.log(result);
// 11 masala
// const posts = [
//   { id: 1, title: "Post 1", comments: ["commit"] },
//   { id: 2, title: "Post 2", comments: [] },
//   { id: 3, title: "Post 3", comments: ["commit"] },
// ];
// const result = posts.filter((post) => post.comments.length > 0);
// console.log(result);
// 12 masala
// type User = {
//   id: number;
//   name: string;
//   email?: string;
// };
// const users: User[] = [
//   { id: 1, name: "Ismoil", email: "ismoil@mail.com" },
//   { id: 2, name: "Nodir" },
//   { id: 3, name: "Hasan", email: "" },
//   { id: 4, name: "Sarvar", email: "sarvar@mail.com" },
//   { id: 5, name: "Olim" },
// ];
// const result: User[] = users.filter((user) => !user.email);
// console.log(result);
// 14 masala
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };
// const products: Product[] = [
//   { id: 1, name: "olma", price: 1000 },
//   { id: 2, name: "apelsen", price: 2000 },
//   { id: 3, name: "banan", price: 800 },
// ];
// const result = products.reduce((minProduct, Product) => {
//   return Product.price < minProduct.price ? Product : minProduct;
// });
// console.log(result);
// 15 masala
// type User = {
//   id: number;
//   name: string;
//   age: number;
// };
// const users: User[] = [
//   { id: 1, name: "Maxsuma", age: 25 },
//   { id: 2, name: "Ruxshona", age: 20 },
//   { id: 3, name: "Rayxona", age: 30 },
// ];
// const result = users.sort((a, b) => a.age - b.age);
// console.log(result);
// 16 masala
// type Task = {
//   id: number;
//   title: string;
//   completed: boolean;
// };
// const tasks: Task[] = [
//   { id: 1, title: "type script", completed: true },
//   { id: 2, title: "js", completed: false },
//   { id: 3, title: "css", completed: false },
//   { id: 4, title: "html", completed: true },
// ];
// const result: Task[] = tasks.filter(
//   (task) => task.completed === false
// );
// console.log(result);
// 17 masala
// type User = {
//   id: number;
//   name: string;
//   role: string;
// };
// const users: User[] = [
//   { id: 1, name: "Amina", role: "admin" },
//   { id: 2, name: "Davron", role: "user" },
//   { id: 3, name: "Mansur", role: "admin" },
//   { id: 4, name: "Nilufar", role: "editor" },
// ];
// const roles: string[] = users.map(user => user.role);
// console.log(roles);  
// 18 masala
// type CartItem = {
//   id: number;
//   name: string;
//   quantity: number;
// };
// const cart: CartItem[] = [
//   { id: 1, name: "Olma", quantity: 3 },
//   { id: 2, name: "Banan", quantity: 5 },
//   { id: 3, name: "Shaftoli", quantity: 2 },
// ];
// const result = cart.reduce((sum, item) => sum + item.quantity, 0);
// console.log(result);
// 19 masala
// type User = {
//   id: number;
//   name: string;
//   address?: string; 
// };
// const users: User[] = [
//   { id: 1, name: "Amina", address: "Tashkent" },
//   { id: 2, name: "Davron" },
//   { id: 3, name: "Mansur", address: "Samarkand" },
//   { id: 4, name: "Nilufar" },
// ];
// const result: User[] = users.filter((user) => user.address);
// console.log(result);
// 20 masala
// type Product = {
//   id: number;
//   name: string;
//   price: number | string; 
// };
// const products: Product[] = [
//   { id: 1, name: "Telifon", price: 1000 },
//   { id: 2, name: "Noutbuk", price: "2000" },
//   { id: 3, name: "Tab", price: 800 },
//   { id: 4, name: "Airpots", price: "150" },
// ];
// const result: Product[] = products.filter(
//   (product): product is Product & { price: number } =>
//     typeof product.price === "number"
// );
// console.log(result);
