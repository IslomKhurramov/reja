//TASK-D
const moment = require("moment");
const time = moment().format("HH:mm");

class Shop {
  constructor(non, cola, lagmon) {
    this.non = non;
    this.cola = cola;
    this.lagmon = lagmon;
  }

  qoldiq() {
    console.log(
      `Hozirda ${time}da ${this.non}ta non,${this.cola}ta cola va ${this.lagmon}ta lagmon mavjud!`
    );
  }

  sotish(a) {
    this.non = this.non - a;
    return console.log(`${a}ta non sotildi!`);
  }
  qabul(b) {
    this.cola = this.cola + b;
    return console.log(`${b}ta cola qabul qilindi!`);
  }
}
const shop = new Shop(4, 2, 5);

shop.qoldiq();
shop.sotish(3);
shop.qoldiq();
shop.qabul(4);
shop.qoldiq();

//

// console.log(" Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narslaar qiling0", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling foydais yoq", //60
// ];

//CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("passed here 1");

//*********async function********************* */

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

//CALL VIA - then-catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// CALL VIA -async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(66);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

///***************CALLBACK FUNCTIONDA SETINTERVAL ISHLATISH */

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("passed here 1");

//DEFAULT QISMI
// function qoldiqTopish(a, b, callback) {
//   if (b == 0) {
//     callback("Mahraj nolga teng bolomaydi", null); //<-bu (err,dataga) teng
//   } else {
//     callback(null, a % b);
//   }
// } //CALLBACK==(ERR,DATA)

// //CALL
// qoldiqTopish(9, 0, (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// const list = [
//   "You should grow up", //0-15
//   "you should learn how to drive", //15-18
//   "you should get an driver license", //18-23
//   "You cant drive ",
// ];

// function drive(age, callback) {
//   // const age = 2023 - a;
//   if (typeof age !== "number") {
//     callback("Enter your birth year", null);
//   } else if (age <= 15) {
//     console.log(list[0]);
//   } else if (age > 15 && age <= 18) {
//     console.log(list[1]);
//   } else if (age > 18 && age <= 23) {
//     console.log(list[3]);
//   } else {
//     callback(list[4]);
//   }
// }
// drive("sxc", (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log(data);
// });

// console.log(" Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narslaar qiling0", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling foydais yoq", //60
// ];

// function advice(a, callback) {
//   if (typeof a !== "number") {
//     callback("enter your age", null);
//   } else if (a <= 20) {
//     console.log(list[0]);
//   } else if (a > 20 && a <= 30) {
//     console.log(list[1]);
//   } else if (a > 30 && a <= 40) {
//     console.log(list[2]);
//   } else if (a > 40 && a <= 50) {
//     console.log(list[3]);
//   } else if (a > 50 && a <= 60) {
//     console.log(list[4]);
//   } else {
//     setTimeout(() => {
//       callback(list[5]);
//     }, 10000);
//   }
// }

// advice(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else console.log(data);
// });
