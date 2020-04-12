class Prayers {
  constructor() {
    this.prayers = [];
    this.adapter = new PrayersAdapter();
    this.fetchAndLoadPrayers(); //with this "()", the instantiation of a new instance of the Prayers class doesn't merely endow the instance with this function; it actually calls the function, fetchAndLoadPrayers, as defined below.
  }

  fetchAndLoadPrayers() {
    this.adapter.getPrayers()
    .then(prayers => { // the calling of this fetchAndLoadPrayers function, which is triggered by the instantiation of an instance of the Prayers class, as described above, automatically calls the getPrayers() function, as defined in the PrayersAdapter class, an instance of which is instantiated as an attribute of the Prayers instance that has been instantiated by the logIn() function of the signUpOrLogIn class, which was instantiated in app.js.
      //console.log(prayers);
      //Once the prayers data reach this point (as evidenced by a console.log(prayers), the data must be appended to the DOM, for which a "render", as defined below, will be called in a promise, just a few lines down from here.
      prayers.forEach(prayer => this.prayers.push(new Prayer(prayer))) //"this.prayers" is the array of all prayers, as defined in the constructor method above. Given that a JSONized array of all prayers is being successfully requested and received, it needs to be iterated through in order for each prayer to be rendered as an individual prayer. So, rather than setting the array = to the incoming jsonized prayers data, each individually jsonized prayer is reconstructed as a new instance of the Prayer class, and then individually pushed into this.prayers, which starts off as an empty array.
    })
    .then(() => {
      this.unhideNewPrayerFormAndRenderPrayers()
    })
    .then(() => {
      this.bindAmenButtons()
    })
    .then(() => {
      this.hideRedundantOrUnauthorizedAddOutcomeButtons()
    })
    .then(() => {
      this.bindAddOutcomeButtons()
    })
    .then(() => {
      this.bindOutcomeSubmitButtons()
    })
    .then(() =>{
      this.bindSortPrayersButton()
    })
  }

  unhideNewPrayerFormAndRenderPrayers() {// Call this method after GETting all the prayers.
    document.getElementById("new-prayer-form").removeAttribute('hidden');
    const prayersContainer = document.getElementById("prayers-container");
    prayersContainer.innerHTML = this.prayers.map(prayer => prayer.renderLi()).join('')
    //data-id = prayer.id
  }

  bindAmenButtons() {
    let amenButtons = document.getElementsByClassName("amen-button-class");
    Array.from(amenButtons).forEach(button => button.addEventListener('click', function() {
        //fetch, based on dataset.id
      let id = button.id.split("-")[2]
      let amensNumberString = parseInt(document.getElementById(`amens-paragraph-${id}`).innerHTML);
      let newAmens = amensNumberString + 1
      fetch(`http://localhost:3000/api/v1/prayers/${id}`, {
        method: `PATCH`,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          },
          body: JSON.stringify({amens: newAmens})
      })
        .then(response => response.json())
        .then(jsonizedResponse => console.log(jsonizedResponse))
        .then(document.getElementById(`amens-paragraph-${id}`).innerHTML = newAmens)
    }));
  }

  hideRedundantOrUnauthorizedAddOutcomeButtons() {
      let addOutcomeButtons = document.getElementsByClassName("add-outcome-button-class");
      Array.from(addOutcomeButtons).forEach(button => {
        let id = button.id.split("-")[3];
        let thisPrayerUserId = document.getElementById(`user-id-div-${id}`).innerHTML;
        if (document.getElementById(`outcome-paragraph-${id}`).innerHTML) {
          button.hidden = true;
        }
        // "!=" instead of "!=="
        if (loggedInUser['id'] != thisPrayerUserId) {
          button.hidden = true;
        }
      })
  }

  bindAddOutcomeButtons() {
    let addOutcomeButtons = document.getElementsByClassName("add-outcome-button-class");
    Array.from(addOutcomeButtons).forEach(button => button.addEventListener('click', function() {
    let id = button.id.split("-")[3];
    let thisPrayerUserId = document.getElementById(`user-id-div-${id}`).innerHTML;
    //console.log(thisPrayerUserId);
    let hiddenOutcomeForm = document.getElementById(`outcome-form-${id}`);
        hiddenOutcomeForm.removeAttribute('hidden');
        button.hidden = true;
    }))
  }

  bindOutcomeSubmitButtons() {
    let submitOutcomeButtons = document.getElementsByClassName("hidden-outcome-form");
    Array.from(submitOutcomeButtons).forEach(button => button.addEventListener('submit', function(e) {
      e.preventDefault();
      let id = button.id.split("-")[2];
      let outcomeText = document.getElementById(`outcome-input-field-${id}`).value;
      if (outcomeText) {
        fetch(`http://localhost:3000/api/v1/prayers/${id}`, {
          method: `PATCH`,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({outcome: outcomeText})
        })
        .then(response => response.json())
        .then(jsonizedResponse => console.log(jsonizedResponse))
        .then(document.getElementById(`outcome-paragraph-${id}`).innerHTML = outcomeText)
        .then(document.getElementById(`outcome-form-${id}`).hidden = true)
      }
    }))
  }

  bindSortPrayersButton() {
    document.getElementById('sort-button').addEventListener('click', function() {
      fetch('http://localhost:3000/api/v1/prayers', {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      })
      .then(response => response.json())
      .then(jsonizedPrayers => {
        jsonizedPrayers.sort(function(a, b) {
          let titleA = a.title.toUpperCase(); // ignore upper and lowercase
          let titleB = b.title.toUpperCase(); // ignore upper and lowercase
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }

          // names must be equal
          return 0;
        })

        //console.log(jsonizedPrayers) checkmark
        //this.prayers = jsonizedPrayers;
        //console.log(this.prayers);  checkmark

        this.prayers = [];
        console.log(this.prayers);
        jsonizedPrayers.forEach(prayer => this.prayers.push(new Prayer(prayer)));
        console.log(this.prayers);
        //this.unhideNewPrayerFormAndRenderPrayers();
        const prayersContainer = document.getElementById("prayers-container");
        prayersContainer.innerHTML = this.prayers.map(prayer => prayer.renderLi()).join('')
        //bindAmenButtons();
        let amenButtons = document.getElementsByClassName("amen-button-class");
        Array.from(amenButtons).forEach(button => button.addEventListener('click', function() {
            //fetch, based on dataset.id
          let id = button.id.split("-")[2]
          let amensNumberString = parseInt(document.getElementById(`amens-paragraph-${id}`).innerHTML);
          let newAmens = amensNumberString + 1
          fetch(`http://localhost:3000/api/v1/prayers/${id}`, {
            method: `PATCH`,
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
              },
              body: JSON.stringify({amens: newAmens})
          })
            .then(response => response.json())
            .then(jsonizedResponse => console.log(jsonizedResponse))
            .then(document.getElementById(`amens-paragraph-${id}`).innerHTML = newAmens)
        }));
        //hideRedundantOrUnauthorizedAddOutcomeButtons();
        let addOutcomeButtons = document.getElementsByClassName("add-outcome-button-class");
        Array.from(addOutcomeButtons).forEach(button => {
          let id = button.id.split("-")[3];
          let thisPrayerUserId = document.getElementById(`user-id-div-${id}`).innerHTML;
          if (document.getElementById(`outcome-paragraph-${id}`).innerHTML) {
            button.hidden = true;
          }
          // "!=" instead of "!=="
          if (loggedInUser['id'] != thisPrayerUserId) {
            button.hidden = true;
          }
        })
        //bindAddOutcomeButtons();
        //let addOutcomeButtons = document.getElementsByClassName("add-outcome-button-class");
        Array.from(addOutcomeButtons).forEach(button => button.addEventListener('click', function() {
        let id = button.id.split("-")[3];
        let thisPrayerUserId = document.getElementById(`user-id-div-${id}`).innerHTML;
        //console.log(thisPrayerUserId);
        let hiddenOutcomeForm = document.getElementById(`outcome-form-${id}`);
            hiddenOutcomeForm.removeAttribute('hidden');
            button.hidden = true;
        }))
        //bindOutcomeSubmitButtons();
        let submitOutcomeButtons = document.getElementsByClassName("hidden-outcome-form");
        Array.from(submitOutcomeButtons).forEach(button => button.addEventListener('submit', function(e) {
          e.preventDefault();
          let id = button.id.split("-")[2];
          let outcomeText = document.getElementById(`outcome-input-field-${id}`).value;
          if (outcomeText) {
            fetch(`http://localhost:3000/api/v1/prayers/${id}`, {
              method: `PATCH`,
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({outcome: outcomeText})
            })
            .then(response => response.json())
            .then(jsonizedResponse => console.log(jsonizedResponse))
            .then(document.getElementById(`outcome-paragraph-${id}`).innerHTML = outcomeText)
            .then(document.getElementById(`outcome-form-${id}`).hidden = true)
          }
        }))


        // .then(() => {
        //   this.unhideNewPrayerFormAndRenderPrayers()
        // })
        // .then(() => {
        //   this.bindAmenButtons()
        // })
        // .then(() => {
        //   this.hideRedundantOrUnauthorizedAddOutcomeButtons()
        // })
        // .then(() => {
        //   this.bindAddOutcomeButtons()
        // })
        // .then(() => {
        //   this.bindOutcomeSubmitButtons()
        // })
        // .then(() =>{
        //   this.bindSortPrayersButton()
        // })


      })
    })
  }

}

//   bindOutcomeSubmitButtons() {
//     //e.preventDefault()
//     let submitOutcomeButtons = document.getElementsByClassName("submit-outcome-button-class");
// //console.log(submitOutcomeButtons); checkmark
//     Array.from(submitOutcomeButtons).forEach(button => button.addEventListener('click', function() {
//       let id = button.id.split("-")[3];
//       let outcomeText = document.getElementById(`outcome-input-field-${id}`).value;
//       if (outcomeText) {
//         fetch(`http://localhost:3000/api/v1/prayers/${id}`, {
//           method: `PATCH`,
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//           },
//           body: JSON.stringify({outcome: outcomeText})
//         })
//         .then(response => response.json())
//         .then(jsonizedResponse => console.log(jsonizedResponse))
//         .then(document.getElementById(`outcome-paragraph-${id}`).innerHTML = outcomeText)
//         .then(document.getElementById(`outcome-form-${id}`).hidden = true)
//       }
//     }))
//   }

//data-id = prayer.id
// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }
//}
