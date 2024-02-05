// function getUserData() {
//   return new Promise((resolve, reject) => {
//     resolve("User Data");
//   });
// }
// function getAccountStatistics() {
//     return new Promise((resolve,reject)=>{
//         resolve("Account Statistics");
//     });
// }
// function getActivityLogs(){
//     return new Promise((resolve,reject)=>{
//         reject("error");
//     });
// }
// Promise.all([getUserData(),getAccountStatistics(),getActivityLogs()]).then((results)=>{
//     console.log(getUserData,getAccountStatistics,getActivityLogs);
// })
// .catch((error)=>{
//     console.error("error");
// });