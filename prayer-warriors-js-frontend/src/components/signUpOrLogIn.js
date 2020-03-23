class SignUpOrLogIn {

  constructor() {
   // this.signUpOrLogIns = [];
   this.adapter = new SignUpOrLogInAdapter();
   this.defineButtons();
   this.addEventListeners();
  }

  defineButtons() {
    this.newUserSubmit = document.getElementById("new-user-submit")
    this.returningUserSubmit = document.getElementById("login-submit")
  }

  addEventListeners() {
    this.newUserSubmit.addEventListener("click", this.adapter.createNewUser);
    //this.newUserSubmit.addEventListener("click", this.adapter.submitNewUserInfo);
    this.returningUserSubmit.addEventListener("click", this.adapter.logIn);
  }

}
