
class SignUpOrLogInAdapter {

  constructor() {

  }


  createNewUser(e) {
    e.preventDefault()
    console.log("I'm into createNewUser");
    let username = document.getElementById("new-user-username").value;
    console.log(username);
    let password = document.getElementById("new-user-password").value;
    console.log(password)
    if (username && password) {
      fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })
      .then(response => response.json())
      .then(jsonizedResponse => console.log(jsonizedResponse)
    )

        //loggedInUserId = jsonizedResponse['id']; console.log(loggedInUserId) )

      .then(jsonizedResponse => console.log(jsonizedResponse)).then(function() {
        document.getElementById("new-user-username").value = "";
        document.getElementById("new-user-password").value = "";
        document.getElementById("registration-response").innerHTML = "You have successfully registered. Welcome to the ranks of our Prayer Warriors."
      })

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
      //     password = "";
      //     // "Please log in."
      //   // }
      // })

        //console.log(jsonizedResponse)
        //render(json)

      // .then( jsonizedResponse)
    }
  }


  submitNewUserInfo(e) {
    e.preventDefault()
    // debugger
    const username = document.querySelector("#new-user-username").value
    const password = document.querySelector("#new-user-password").value
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    })
    // .then(r => r.json())
    // .then(console.log)
    //
    // .then(new Prayers())






        .then(r => r.json())
        .then(console.log)
        .then(new Prayers())
          .then(response => response.json())
          .then( user => {
            window.userToken = user.jwt;
          })

          .then(new Prayers())
          .then( () => {

            console.log(window.userToken);
            fetch('http://localhost:3000/api/v1/prayers', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${window.userToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                prayer: {
                  title: 'title',
                  body: 'body'
                }
              })
            }).then(response => response.json()).then( response => console.log(response)) ;
          });














    // .then(console.log('I need to load the pre-existing prayers.')) //This console.log() works, which means I can chain another function on on to here.
    //"You must enter a unique name and a password. Please try again."
  }

  submitReturningUserInfo(e) {
    e.preventDefault()
    const username = document.querySelector("#login-username").value
    const password = document.querySelector("#login-password").value
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    })
    .then(r => r.json())
    .then(console.log)

    .then(new Prayers())

    // .then(console.log('I need to load the pre-existing prayers.'))
    //after this adapter function is run by the SignUpOrLogIn instance, that instance should run something like, "document.body.innerHTML = "


    //.then(console.log('I need to load the pre-existing prayers.')) This console.log() works, which means I can chain another function on on to here.
    //"You have entered an invalid username or password. Please try again."
  }

}
