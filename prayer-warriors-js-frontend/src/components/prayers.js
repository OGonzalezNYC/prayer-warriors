//This Prayers class is where the meat of the program will reside.
class Prayers {
  constructor() {
    this.prayers = [];
    this.adapter = new PrayersAdapter();
    this.fetchAndLoadPrayers(); //with this "()", the instantiation of a new instance of the Prayers class doesn't merely ENDOW the instance with this function; it actually CALLS the function, fetchAndLoadPrayers, which is defined below.
  }

  fetchAndLoadPrayers() {
    this.adapter.getPrayers()
    .then(prayers => { // the calling of this fetchAndLoadPrayers function, which is triggered by the instantiation of an instance of the Prayers class, as described above, automatically calls the getPrayers() function, as defined in the PrayersAdapter class, an instance of which is instantiated as an attribute of the Prayers instance that has been instantiated by the logIn() function of the signUpOrLogIn class, which was instantiated in app.js.
      //console.log(prayers);
      //Once the prayers data reach this point (as evidenced by a console.log(prayers), the data must be appended to the DOM, for which a "render", as defined below, will be called in a promise, just a few lines down from here.
      prayers.forEach(prayer => this.prayers.push(new Prayer(prayer))) //"this.prayers" is the array of all prayers, as defined above. Given that a JSONized array of all prayers is being successfully requested and received, it needs to be iterated through in order for each prayer to be rendered as an individual prayer. So, rather than setting the array = to the incoming jsonized prayers data, each individually jsonized prayer is reconstructed as a new instance of the Prayer class, and then individually pushed into this.prayers, which starts off empty.
    })
    .then(() => {
      this.render()
    })
    .then(() => {
      this.bindAmenButtons()
    })

    .then(() => {
      this.hideRedundantAddOutcomeButtons()
    })

    .then(() => {
// console.log('Passed bindAmenButtons');
      this.bindAddOutcomeButtons()
    })
    .then(() => {
      this.bindOutcomeSubmitButtons()
    })
  }

  render() {// We want to call this method after we get all the prayers.
    //const prayersString = this.prayers.map(prayer => `<li>${prayer.title}</li>`).join('')
    //console.log('rendering...')// The fact that this console.log() works, means
    //console.log(prayersString)// The fact that this console.log() is working means that the array of all prayers is reaching this far.
    //console.log(this.prayers[0])
    const prayersContainer = document.getElementById("prayers-container");
    //prayersContainer.innerHTML = 'my prayers here' // The fact that 'my prayers here' successfully
    //populates the "prayers-container" div, means it's all working so far.

    // make the new-user-registration form and the log-in-form vanish.


    prayersContainer.innerHTML = //this.prayers.map(prayer => `<li>${prayer.title}</li>`).join('')

    this.prayers.map(prayer => prayer.renderLi()).join('')
    //Now I'll want to document.getElementsByClassName("add-amen-button") and document.getElementsByClassName("add-outcome-button"), and add an eventListener to each one.

    //Datasets are for adding id's dynamically.
    //data-id = prayer.id
  }

  bindAmenButtons() {
    let amenButtons = document.getElementsByClassName("amen-button-class");
    Array.from(amenButtons).forEach(button => button.addEventListener('click', function() {
        //fetch, based on dataset.id amens +=1
        // let amensNumberString = button.parentNode.innerHTML;
    //debugger;
      let id = button.id.split("-")[2]
    //debugger;
      let amensNumberString = parseInt(document.getElementById(`amens-paragraph-${id}`).innerHTML);
    //debugger;
      let newAmens = amensNumberString + 1
    //debugger;
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
     //this.adapter.increaseAmens(button))
  }


  hideRedundantAddOutcomeButtons() {
    let addOutcomeButtons = document.getElementsByClassName("add-outcome-button-class");
    Array.from(addOutcomeButtons).forEach(button => {
      let id = button.id.split("-")[3];
      if (document.getElementById(`outcome-paragraph-${id}`).innerHTML !== "  ") {
        button.hidden = true;
      }
    })
  }


  bindAddOutcomeButtons() {
//console.log('Into bindAddOutcomeButtons'); //checkmark
    let addOutcomeButtons = document.getElementsByClassName("add-outcome-button-class");
//console.log(Array.from(addOutcomeButtons));
//Array.from(addOutcomeButtons).forEach(button => (console.log(button.id)));
    Array.from(addOutcomeButtons).forEach(button => button.addEventListener('click', function() {
//console.log('Line 90'); checkmark
    let id = button.id.split("-")[3];
//console.log(id); checkmark
    let thisPrayerUserId = document.getElementById(`user-id-div-${id}`).innerHTML;
console.log(thisPrayerUserId);
    let hiddenOutcomeForm = document.getElementById(`outcome-form-${id}`);
    //== rather than === renders datatype irrelevant.
      if (loggedInUser['id'] == thisPrayerUserId) {
    //== rather than === renders datatype irrelevant.
        hiddenOutcomeForm.removeAttribute('hidden');
        button.hidden = true
      }
    }))
  }


  bindOutcomeSubmitButtons() {
    //e.preventDefault()
//console.log('We are in bindOutcomeSubmitButtons') checkmark
    let submitOutcomeButtons = document.getElementsByClassName("submit-outcome-button-class");
//console.log(submitOutcomeButtons); checkmark
    Array.from(submitOutcomeButtons).forEach(button => button.addEventListener('click', function() {
      let id = button.id.split("-")[3];
      let outcomeText = document.getElementById(`outcome-input-field-${id}`).value;
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
//console.log('I have populated the prayer outcome field with outcoomeText'); checkmark
      .then(document.getElementById(`outcome-form-${id}`).hidden = true)
      //re-hide the outcome form.
      //element.hidden = true
    }))
  }
}
