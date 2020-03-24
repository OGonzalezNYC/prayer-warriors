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
//debugger;
    return `<li><div class="individual-prayer-container">Title: ${this.title}</div>

                <div hidden class="hidden-container" id="user-id-div-${this.id}">${this.user_id}</div>

                <div class="prayer-by-container">Prayer Warrior: ${allUsers.find(user => user['id'] === this.user_id).username}</div>

                <div class="body-container">Prayer: ${this.body}</div>
                <p class="amens-paragraph" id="amens-paragraph-${this.id}">
                ${this.amens}
                </p>
                  <button type="button" id="amen-${this.id}" class="add-amen-button">Amen</button>
                <p class="outcome-container" id="outcome-paragraph-${this.id}">Outcome: ${this.outcome}</p>
                  <button type="button" class="add-outcome-button" id="amen-${this.id}">Add Outcome</button>

            </li>
            <br>`
  }
}
