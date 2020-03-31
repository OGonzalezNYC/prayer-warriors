
class SignUpOrLogInAdapter {

  constructor() {

  }

  createNewUser(e) {
    e.preventDefault()
    console.log("I'm into createNewUser");
    let username = document.getElementById("new-user-username").value;
    console.log(username);
    let verse = document.getElementById("new-user-verse").value;
    console.log(verse)
    if (username && verse) {
      fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username: username,
          verse: verse
        })
      })
      .then(response => response.json())
      //.then(jsonizedResponse => console.log(jsonizedResponse))
      .then(jsonizedResponse => mostRecentlyCreatedUserId = jsonizedResponse['id'])
      .then(function() {
        if (mostRecentlyCreatedUserId) {
          document.getElementById("registration-response").innerHTML = `God bless you, ${username}. And welcome to the ranks of our Prayer Warriors. Please log in below in order to start posting prayers, or to read the prayers of your fellow warriors and support them with amens if you feel so led.`
          document.getElementById("new-user-username").value = "";
          document.getElementById("new-user-verse").value = "";
        }
      })
      //.catch(error => {console.log(error)})
    }
    if (username && verse) {
      document.getElementById("registration-response").innerHTML = `You have chosen a username that already belongs to another Prayer Warrior. Please choose a different username.`
    }
    if (!username || !verse) {
      document.getElementById("registration-response").innerHTML = `You must enter a username and a password.`
    }
    // if (!username && verse) {
    //   document.getElementById("registration-response").innerHTML = `In addition to a password or verse, you must enter a username.`
    // }
    // if (!username && !verse) {
    //   document.getElementById("registration-response").innerHTML = `You must enter a username and a password.`
    // }
  }


  //This eventListener callback is implemented when the login-name input fireld gets clicked.
  fetchUsers() {
    fetch('http://localhost:3000/api/v1/users', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(response => response.json())
    .then(jsonizedResponse => allUsers = jsonizedResponse)
  }


}

  // logIn(e) {
  //   e.preventDefault();
  //   let username = document.getElementById("login-username").value;
  //   let verse = document.getElementById("login-verse").value;
  //   console.log(username)
  //   console.log(verse);
  //   if (username && verse) {
  //     let loggedInUser = allUsers.find(user => user['username'] === document.getElementById("login-username").value && user['verse'] === document.getElementById("login-verse").value);
  //     console.log(loggedInUser);
  //   }
  //   console.log(loggedInUser);
  // }


  // createNewPrayer() {
  //
  // }


    //  let loggedInUser = allUsers.find(user => user['username'] === username && user['verse'] === verse);
    // //   if (loggedInUser) {
    // //     console.log(loggedInUser + "here")
    // }
    // }
        //loggedInUserId = loggedInUser['id'];
        //console.log(loggedInUserId);
      // }

//       const array1 = [5, 12, 8, 130, 44];
//
// const found = array1.find(element => element > 10);
//
// console.log(found);
// // expected output: 12

    // }
    //   .then(response => response.json())
    //   .then(jsonizedResponse => console.log(jsonizedResponse))
    // }

 //this is the CLASS closing bracket.




        //loggedInUserId = jsonizedResponse['id']; console.log(loggedInUserId) )


        // if (jsonizedResponse['id']) {
        //   loggedInUserId = jsonizedResponse['id'];
        //   console.log(loggedInUserId);
        // }

      // .then(function() { if (jsonizedResponse) {console.log('surviving')}})
      // .then(function() {
      //   if (jsonizedResponse) {
      //     document.getElementById("registration-response").innerHTML = "You have successfully registered. Welcome to the ranks of our Prayer Warriors."
      //     document.getElementById("new-user-username").value = "";
      //     document.getElementById("new-user-verse").value = "";
      //   }
      // })

      // .then(jsonizedResponse => console.log(jsonizedResponse)).then(function() {
      //
      //   // function(jsonizedResponse) {
      //           // => console.log(jsonizedResponse))
      //
      // // .then(jsonizedResponse
      //     //=> function(jsonizedResponse) {
      //     // console.log(jsonizedResponse);
      //   //if (jsonizedResponse['id']) {
      //     loggedInUserId = jsonizedResponse['id'];
      //   })
      //   .then(function() {
      //     document.getElementById("registration-response").innerHTML = "You have successfully registered. Welcome to the ranks of our Prayer Warriors. Please log in below."
      //     username = "";
      //     verse = "";
      //     // "Please log in."
      //   // }
      // })

        //console.log(jsonizedResponse)
        //render(json)

      // .then( jsonizedResponse)



  // submitNewUserInfo(e) {
  //   e.preventDefault()
  //   // debugger
  //   const username = document.querySelector("#new-user-username").value
  //   const verse = document.querySelector("#new-user-verse").value
  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: `${username}`,
  //         verse: `${verse}`
  //       }
  //     })
  //   })
  //   // .then(r => r.json())
  //   // .then(console.log)
  //   //
  //   // .then(new Prayers())
  //
  //
  //
  //
  //
  //
  //       .then(r => r.json())
  //       .then(console.log)
  //       .then(new Prayers())
  //         .then(response => response.json())
  //         .then( user => {
  //           window.userToken = user.jwt;
  //         })
  //
  //         .then(new Prayers())
  //         .then( () => {
  //
  //           console.log(window.userToken);
  //           fetch('http://localhost:3000/api/v1/prayers', {
  //             method: 'POST',
  //             headers: {
  //               Authorization: `Bearer ${window.userToken}`,
  //               'Content-Type': 'application/json',
  //               Accept: 'application/json'
  //             },
  //             body: JSON.stringify({
  //               prayer: {
  //                 title: 'title',
  //                 body: 'body'
  //               }
  //             })
  //           }).then(response => response.json()).then( response => console.log(response)) ;
  //         });





//   logIn(e) {
//     e.preventDefault()
//     console.log("I'm into logIn");
//     let username = document.getElementById("login-username").value
//     console.log(username);
//     let verse = document.getElementById("login-verse").value
//     console.log(verse)
//     if (username && verse) {
//       fetch('http://localhost:3000/api/v1/users', {
//         method: "GET",
//         headers: {"Content-Type": "application/json"},
//       })
//       .then(response => response.json())
//       .then(jsonizedResponse => console.log(jsonizedResponse))
//     }
//   }
//
// }
  // .then(jsonizedResponse => loggedInUserId = jsonizedResponse['id']);
  // if (loggedInUserId) {
  //
  // }

  // document.getElementById("registration-response").innerHTML = "You have successfully registered. Welcome to the ranks of our Prayer Warriors."
  // document.getElementById("new-user-username").value = "";
  // document.getElementById("new-user-verse").value = "";


  //     fetch('http://localhost:3000/api/v1/users/:id, {
  //       // fetch('http://localhost:3000/api/v1/profile', {
  //       method: "GET",
  //       headers: {"Content-Type": "application/json"},
  //       // body: JSON.stringify({
  //       //   username: username,
  //       //   verse: verse,
  //       // })
  //     })
  //     .then(response => response.json())
  //     .then(jsonizedResponse => console.log(jsonizedResponse))
  //     .then(jsonizedResponse => console.log(jsonizedResponse)).then(function() {
  //       document.getElementById("login-response").innerHTML = `God bless you, ${username}.`
  //       document.getElementById("login-username").value = "";
  //       document.getElementById("login-verse").value = "";
  //     })
  //   }
  //       //loggedInUserId = jsonizedResponse['id']; console.log(loggedInUserId) )
  // }
