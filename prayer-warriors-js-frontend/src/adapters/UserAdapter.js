class UserAdapter {

  constructor() {
  }

  createNewPrayer(e) {
    e.preventDefault()
    let title = document.getElementById("new-prayer-title").value
    let body = document.getElementById("new-prayer-body").value
    if (title && body) {
      fetch('http://localhost:3000/api/v1/prayers', {
        method: "POST",
        headers: {"Content-TYPE": "application/json"},
        body: JSON.stringify({
          title: `${title}`,
          body: `${body}`,
          amens: 0,
          outcome: `${""}`,
          user_id: `${loggedInUser['id']}`
        })
      })
      .then(response => response.json())
      .then(jsonizedResponse => console.log(jsonizedResponse))
      .then(document.getElementById("new-prayer-title").value = "")
      .then(document.getElementById("new-prayer-body").value = "")
      .then(setTimeout(() => new Prayers(), 250))
      //.then(new Prayers())
      //.then(new Prayers())
    }
  }

}
