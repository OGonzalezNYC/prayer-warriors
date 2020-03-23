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
    return `<li><div>Title: ${this.title}</div>
                <div>Prayer: ${this.body}</div>
                <p id="amens-paragraph-${this.id}">
                ${this.amens}
                </p>
                  <button type="button" id="amen-${this.id}" class="add-amen-button">Amen</button>
                <p id="outcome-paragraph-${this.id}">Outcome: ${this.outcome}</p>
                  <button type="button" class="add-outcome-button" id="amen-${this.id}">Add Outcome</button>

            </li>
            <br>`
  }
}
