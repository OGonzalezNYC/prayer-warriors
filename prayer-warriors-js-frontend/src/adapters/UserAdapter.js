class UserAdapter {
  constructor() {

  }

  createNewPrayer(e) {
    e.preventDefault()
    let title = document.getElementById("new-prayer-title").value
    let body = document.getElementById("new-prayer-body").value
    //fetch('http://localhost:3000/api/v1/users', {
    if (title && body) {
      fetch('http://localhost:3000/api/v1/prayers', {
        method: "POST",
        headers: {"Content-TYPE": "application/json"},
        body: JSON.stringify({
          title: `${title}`,
          body: `${body}`,
          amens: 0,
          outcome: `${" "}`,
          user_id: `${loggedInUser['id']}`
        })
      })
      .then(response => response.json())
      .then(jsonizedResponse => console.log(jsonizedResponse))
      .then(document.getElementById("new-prayer-title").value = "")
      .then(document.getElementById("new-prayer-body").value = "")
      .then(new Prayers())
      .then(new Prayers())
    }
  }
}
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
