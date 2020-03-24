//This Prayers class is where the meat of the program will reside.
class Prayers {
  constructor() {
    this.prayers = [];
    this.adapter = new PrayersAdapter();
    this.fetchAndLoadPrayers(); //with this "()", the instantiation of a new instance of the Prayers class doesn't merely ENDOW the instance with this function; it actually CALLS the function, fetchAndLoadPrayers, which is defined below.
  }

  fetchAndLoadPrayers() {
    this.adapter
      .getPrayers()
      .then(prayers => { // the calling of this fetchAndLoadPrayers function, which is triggered by the instantiation of an instance of the Prayers class, as described above, automatically calls the getPrayers function, as defined in the PrayersAdapter class, an instance of which is instantiated as an attribute of the Prayers instance that has been instantiated by in the logIn function of the signUpOrLogIn class, which was instantiated in app.js.

      //Once the prayers reach this point, as evidenced by a console.log(prayers), it's certain that the data from the API is succesfully reaching this point. Now that data must be appended to the DOM, for which a "render", as defined below, will be called in a promise, just a few lines down from here.

      prayers.forEach(prayer => this.prayers.push(new Prayer(prayer))) //"this.prayers" is the array of all prayers, as defined above. Given that we are successfully requesting and receiving a JSONized array of all prayers, we need to iterate through that array in order to render each prayer as an individual prayer. So, rather than simply pushing "prayer" into this.prayers, which starts off empty, we push it in AS A NEW INSTANCE of Prayer, defined in prayer.js.
    })
    .then(() => {
      this.render()
    })
    .then(() => {
      this.bindAmenButtons()
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
    let amenButtons = document.getElementsByClassName("add-amen-button");
    Array.from(amenButtons).forEach(button => button.addEventListener('click', function() {

      //increaseAmens(button) {
        //fetch, based on dataset.id amens +=1
        // let amensNumberString = button.parentNode.innerHTML;
        //let newAmens = parseInt(amensNumberString) + 1
    //debugger;
        let id = button.id.split("-")[1]
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
    //may need to use .to_string in line 17.
      }
     //this.adapter.increaseAmens(button))
   ));
  }
    //amensNumber = parseInt(amensNumber) + 1;
}
