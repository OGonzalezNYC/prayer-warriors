class Prayer {
  constructor(prayerJSON) {
    this.id = prayerJSON.id;
    this.title = prayerJSON.title;
    this.body = prayerJSON.body;
    this.outcome = prayerJSON.outcome;
    this.amens = prayerJSON.amens;
    this.user_id = prayerJSON.user_id;
  }

  renderLi() {
    return `<br>
            <li><div class="individual-prayer-container">Title: ${this.title}</div>

                <div hidden class="hidden-container" id="user-id-div-${this.id}">${this.user_id}</div>

                <div class="prayer-by-container">Prayer Warrior: ${allUsers.find(user => user['id'] === this.user_id).username}</div>

                <div class="body-container">Prayer: ${this.body}</div>
                Amens:
                <p class="amens-paragraph" id="amens-paragraph-${this.id}">
                ${this.amens}
                </p>
                  <button type="button" id="amen-button-${this.id}" class="amen-button-class">Amen +</button><br>
                  Outcome:
                <p class="outcome-container" id="outcome-paragraph-${this.id}">${this.outcome}</p>
                  <button type="button" class="add-outcome-button-class" id="add-outcome-button-${this.id}">Add Outcome</button>
                  <form hidden id="outcome-form-${this.id}" class="hidden-outcome-form">
                  <p>Tell us how God answered your prayer: <input id="outcome-input-field-${this.id}" type="text"/></p>


                  </form>

            </li>
            <br>`

            // <button type="button" class="submit-outcome-button-class" id="submit-outcome-button-${this.id}">Submit Outcome</button>

            // p.removeAttribute("hidden");
            //p.hidden = true;
            //p.hidden = false;
  }
}
