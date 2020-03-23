class SignUpOrLogIn {

  constructor() {
    //*****************************************************************************
   this.userAdapter = new UserAdapter();
   this.adapter = new SignUpOrLogInAdapter();
   this.defineButtons();
   this.addEventListeners();
  }

  defineButtons() {
    this.newUserSubmitButton = document.getElementById("new-user-submit")
    this.logInNameField = document.getElementById("login-username")
    this.logInSubmitButton = document.getElementById("login-submit")
    this.newPrayerSubmitButton = document.getElementById("new-prayer-submit-button")
  }

  addEventListeners() {
    this.newUserSubmitButton.addEventListener("click", this.adapter.createNewUser);
    this.logInNameField.addEventListener("click", this.adapter.fetchUsers);
    this.logInSubmitButton.addEventListener("click", this.logIn);
    //************************************************************************
    this.newPrayerSubmitButton.addEventListener("click", this.userAdapter.createNewPrayer);
  }

  logIn(e) {
    e.preventDefault();
    //******************************* Conditionally capture the submitted username and verse.
    //*******************************Iterate through allUsers to find the user whose username and verse match the captured values.
    //***********************************Set the global variable loggedInUserId = to that user's id.
    //**********************************  "if (loggedInUserId)" {display, "You are now logged in."}, blank the fields, and populate the prayers-ontainer."
    // console.log("I'm into logIn");
    let username = document.getElementById("login-username").value;
    // console.log(username);
    let verse = document.getElementById("login-verse").value;
    console.log(username)
    console.log(verse);
    // console.log(verse + " again")
    // console.log(username)

    if (username && verse) {
      //let loggedInUser = function() {
      let loggedInUser = allUsers.find(user => user['username'] === document.getElementById("login-username").value && user['verse'] === document.getElementById("login-verse").value);
      //console.log(loggedInUser);
      if (loggedInUser) {
        document.getElementById('hidden-login-data').innerHTML = `${document.getElementById("login-username").value}`;
      // let loggedInUserId = loggedInUser['id'];
      }
      // console.log(loggedInUser + " is the loggedInuser");
    }
    //console.log(loggedInUser);***********


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
  }


}
