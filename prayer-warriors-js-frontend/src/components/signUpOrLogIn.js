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
    this.logInSubmitButton.addEventListener("click", this.adapter.logIn);
    //************************************************************************
    this.newPrayerSubmitButton.addEventListener("click", this.userAdapter.createNewPrayer;
  }

}
