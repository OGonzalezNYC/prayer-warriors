// class UserAdapter {
//   constructor() {
//     this.baseUrl = 'http://localhost:3000/api/v1/'
//     this.bulkOfFetchCall = `, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: JSON.stringify({
//         user: {`
//   }
//
//   defineInputs() {
//     this.newUsername = document.getElementById("new-user-username").value;
//     this.newPassword = document.getElementById("new-user-password").value;
//     this.returningUsername = document.getElementById("login-username").value;
//     this.returningPassword = document.getElementById("login-password").value;
//   }
//
//
//
//
//
//
//   submitNewUserInfo() {
//     fetch(baseUrl + 'users' + bulkOfFetchCall + ' username: ' + newUsername + ', password: ' + newPassword + '} }) }')
//     .then(r => r.json())
//     .then(console.log)
//     //.then
//   }
//
//
//   submitReturningUserInfo() {
//     fetch(baseUrl + 'login' + bulkOfFetchCall + ' username: ' + returningUsername + ', password: ' + returningPassword + '} }) }')
//     .then(r => r.json())
//     .then(console.log)
//     //.then
//
// //     fetch('http://localhost:3000/api/v1/users', {
// //   method: 'POST',
// //   headers: {
// //     'Content-Type': 'application/json',
// //     Accept: 'application/json'
// //   },
// //   body: JSON.stringify({
// //     user: {
// //       username: "Lucky",
// //       password: "LuckyPassword"
// //     }
// //   })
// // })
// //   .then(r => r.json())
// //   .then(console.log)
//
//
//
//   }
// }
