//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

// (N1 Davaleba)
// function processNumbers(num1, num2, callBack) {
//   if (
//     typeof num1 !== "number" ||
//     typeof num2 !== "number" ||
//     typeof callBack !== "function"
//   ) {
//     console.error("დაფიქსირდა შეცდომა მცდარ ტიპებზე");
//     return;
//   }
//   const result = callBack(num1,num2);
//   console.log(`შედეგი : ${result}`);
// }
// magaliti
// const addCallback =(x,y)=>x*y;
// processNumbers(11,4,addCallback);

//(N2 Davaleba)
// function isValidUser(userName, password) {
//   if (
//     userName === "" ||
//     password === "" ||
//     typeof userName !== "string" ||
//     typeof password !== "string"
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isValidUser("momoshi", "fushigura"));

//(N3 Davaleba)
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// console.log(fibonacci(10));

//(N4 Davaleba)
// function countDown() {
//   let seconds = 10;
//   const interval = setInterval(function () {
//     console.log(` time : ${seconds} second`);
//     if (seconds === 0) {
//       console.log("time expired!!!");
//       clearInterval(interval);
//     }
//     seconds--;
//   }, 1000);
// }
// countDown();

//(N5 Davaleba)
// function calculateAge(birthDate) {
//   var birthDateObj = new Date(birthDate);
//   var today = new Date();
//   var age = today.getFullYear() - birthDateObj.getFullYear();
//   if (
//     today.getMonth() < birthDateObj.getMonth() ||
//     (today.getMonth() === birthDateObj.getMonth() &&
//       today.getDate() < birthDateObj.getDate())
//   ) {
//     age--;
//   }
//   return age;
// }
// var birthDateInput = prompt(
//   "ჩაწერეთ თქვენი დაბადების თარიღი მაგალითად 2003-07-26"
// );
// try {
//   var age = calculateAge(birthDateInput);
//   alert("თქვენ ხართ" + " " + age + " " + "წლის.");
// } catch (error) {
//   alert(
//     "E-R-R-O-R :: გთხოვთ სწორად ჩაწეროთ თქვენი დაბადების თარიღი (მაგ. 2003-07-26)."
//   );
// }

//(N6 Davaleba)
// function getDayOfWeek() {
//   var daysOfWeek = [
//     "კვირა",
//     "ორშაბათი",
//     "სამშაბათი",
//     "ოთხშაბათი",
//     "ხუთშაბათი",
//     "პარასკევი",
//     "შაბათი",
//   ];
//   var currentDayIndex = new Date().getDay();
//   var currentDay = daysOfWeek[currentDayIndex];
//   console.log("დღეს არის"+" "+ currentDay);
// }
// getDayOfWeek();

// (lecture task)
// დაწერეთ ფუნქცია რომლის მიხედვითაც პარამეტრად უნდა მივიღოთ productId,
// და ახალი category მაგალითად Electronics რომლის
// მიხედვითაც განვაახლებთ იმ product რომლის id მოგვივა.გამოიყენეთ map და if else.
// const products = [
//   {
//     id: 1,
//     title: "Product A",
//     price: 9.99,
//     category: "Clothing",
//   },
//   {
//     id: 2,
//     title: "Product B",
//     price: 19.99,
//     category: "Books",
//   },
//   {
//     id: 3,
//     title: "Product C",
//     price: 29.99,
//     category: "Clothing",
//   },
//   {
//     id: 4,
//     title: "Product C",
//     price: 29.99,
//     category: "Books",
//   },
// ];
// function dataUpdate(productId,changeCategory) {
  
  
// }