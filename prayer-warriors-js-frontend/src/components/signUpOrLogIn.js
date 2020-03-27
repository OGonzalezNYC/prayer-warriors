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
    //*************************************************************************
  }

  logIn(e) {
    e.preventDefault();
    //Still need to populate the prayers-ontainer 15 lines down."
    let username = document.getElementById("login-username").value;
    let verse = document.getElementById("login-verse").value;
    console.log(username)
    console.log(verse);

    if (username && verse) {
      loggedInUser = allUsers.find(user => user['username'] === username && user['verse'] === verse);
    }
    // else {
    //   document.getElementById("login-response").innerHTML = `You must submit a valid name and verse.`
    // }
    console.log(loggedInUser);

    if (loggedInUser) {
      // document.getElementById("login-response").innerHTML = `You are now logged in, ${username}.`;
      document.getElementById("login-response").innerHTML = `You are now LOGGED IN, ${username}, speaking of which, don't forget our Lord's command to first remove the LOG IN your own eye before attempting to remove the speck from your brother's! LOL`;
      document.getElementById("login-username").value = "";
      document.getElementById("login-verse").value = "";
      document.getElementById("login-form").hidden = true;
      document.getElementById("registration-container").hidden = true;
      document.getElementById("logout-button").hidden = false;

      document.getElementById("login-form").hidden = true;
      document.getElementById("logout-button").hidden = false;
      document.getElementById("new-prayer-container").hidden = false;
      document.getElementById("prayers-container").hidden = false;
      document.getElementById("login-response").hidden = false;
      document.getElementById("registration-container").hidden = true;

      document.getElementById("logout-button").addEventListener('click', function() {
        loggedInUser = false;
        document.getElementById("login-form").hidden = false;
        document.getElementById("logout-button").hidden = true;
        document.getElementById("new-prayer-container").hidden = true;
        document.getElementById("prayers-container").hidden = true;
        document.getElementById("login-response").hidden = true
        document.getElementById("registration-container").hidden = false
      });
      //populate the prayers-container
      new Prayers();
    }
  }


}
