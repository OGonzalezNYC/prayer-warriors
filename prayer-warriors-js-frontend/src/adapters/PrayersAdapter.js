class PrayersAdapter {

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/prayers';
  }

  getPrayers() {
    return fetch(this.baseUrl).then(res => res.json());
  }
//fetch, based on dataset.id amens +=1
}
