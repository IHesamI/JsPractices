// // async function delay(ms) {
// //   return await new Promise((resolve, reject) => {
// //     setTimeout(() => resolve("here we go again"), ms);
// //   });
// // }
// const delay = new Promise(async (resolve, reject) => {
//   setTimeout(() => {
//     const x = Math.floor(Math.random() * 10) % 2;
//     return x == 0 ? resolve("here we go again") : reject("shit");
//   }, 1000);
// });

// delay
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.log("error: ", err));

// console.log(1);

// //^ check for pending

// let state = "pending";
// const prom = new Promise((resolve, reject) => {
//   resolve("zarp namosan");
// });

// prom
//   .then((result) => {
//     state = "fullfilled";
//     console.log(result); // This will be called when the Promise is fulfilled
//   })
//   .catch((error) => {
//     console.error(error); // This will be called when the Promise is rejected
//   });
// setTimeout(() => {
//   console.log(prom.then);
//   if (
//     // prom &&
//     // typeof prom.then === 'function' &&
//     // typeof prom.catch === 'function'
//     state === "pending"
//   ) {
//     console.log("is pending");
//   } else {
//     console.log("is not pending");
//   }
// }, 2000);

// & Promsie.all
// const prom1 = Promise.resolve(1),
//   prom2 = Promise.reject('error'),
//   prom3 = Promise.resolve(2);
// Promise.all([prom1,
//   // prom2,
//   prom3])
// .then((responses) => console.log(responses))
// .catch(err=>console.log(err));

// ~ Promsie.allSettled
// const prom1 = Promise.resolve(1),
//   prom2 = Promise.reject('error'),
//   prom3 = Promise.resolve(2);
// Promise.allSettled([prom1,
//   prom2,
//   prom3])
// .then((responses) => console.log(responses))
// .catch(err=>console.log(err));

// & Promise.race
// const time = new Date().getTime();
// console.log(time);
// const prom1 = new Promise((resolve, reject) => {
//     const time1 = new Date().getTime();
//     console.log(time1 - time);

//     setTimeout(() => resolve(1), 2000);
//   }),
//   prom2 = new Promise((resolve, reject) => {
//     const time2 = new Date().getTime();
//     console.log(time2 - time);
//     setTimeout(() => reject("error"), 1000);
//   }),
//   prom3 = new Promise((resolve, reject) => {
//     const time3 = new Date().getTime();
//     console.log(time3 - time);
//     setTimeout(() => resolve(2), 3000);
//   });
// Promise.race([prom1, prom2, prom3])
//   .then((responses) => console.log(responses))
//   .catch((err) => console.log(err));

