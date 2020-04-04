
class SignUpOrLogInAdapter {

  constructor() {

  }

  createNewUser(e) {
    e.preventDefault()
    //console.log("I'm into createNewUser");
    let username = document.getElementById("new-user-username").value;
    //console.log(username);
    let verse = document.getElementById("new-user-verse").value;
    //console.log(verse)
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


  //This eventListener callback is implemented when the login-name input field gets clicked.
  fetchUsers() {
    fetch('http://localhost:3000/api/v1/users', {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(response => response.json())
    .then(jsonizedResponse => allUsers = jsonizedResponse)
  }

}
