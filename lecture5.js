// const tableBody = document.querySelector("#usersTable tbody");
// const btn = document.querySelector("#button");
// function fetchUserId(userId) {
//   tableBody.innerHTML = "";
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       btn.addEventListener("click", function () {
//         if ("clicked") {
//           data.forEach((user) => {
//             const row = tableBody.insertRow();
//             row.insertCell(0).textContent = user.id;
//             row.insertCell(1).textContent = user.name;
//             row.insertCell(2).textContent = user.email;
//             row.insertCell(3).textContent = user.username;
//           });
//         } else {
//           console.log("error");
//         }
//       });
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }
// btn.addEventListener('click', function () {
//     fetchUserId(1);
// });
// const tableBody = document.querySelector("#usersTable tbody");

// function fetchUserData(userId) {
//   // Clear existing table rows
//   tableBody.innerHTML = "";

//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response) => response.json())
//     .then((user) => {
//       const row = tableBody.insertRow();
//       row.insertCell(0).textContent = user.id;
//       row.insertCell(1).textContent = user.name;
//       row.insertCell(2).textContent = user.email;
//       row.insertCell(3).textContent = user.username;
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }

// document.getElementById("fetchButton1").addEventListener("click", function () {
//   fetchUserData(1);
// });

// document.getElementById("fetchButton2").addEventListener("click", function () {
//   fetchUserData(2);
// });

// document.getElementById("fetchButton3").addEventListener("click", function () {
//   fetchUserData(3);
// });

// document.getElementById("fetchButton4").addEventListener("click", function () {
//   fetchUserData(4);
// });

// document.getElementById("fetchButton5").addEventListener("click", function () {
//   fetchUserData(5);
// });
