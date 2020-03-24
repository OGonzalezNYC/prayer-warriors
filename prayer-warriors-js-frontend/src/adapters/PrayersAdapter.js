// This adapter is what will talk to the backend API. In fact, that's the entire purpose of the adapter. It's the middle man, if you will, the equivalent of a pure Ruby-on-Rails controller.
class PrayersAdapter {
  // An instance of PrayersAdapter will make a fetch request to the backend (api/v1/prayers) and jsonify the response.
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/prayers';
  }

  getPrayers() {
    return fetch(this.baseUrl).then(res => res.json());
  }

//   increaseAmens(button) {
//     //fetch, based on dataset.id amens +=1
//     // let amensNumberString = button.parentNode.innerHTML;
//     //let newAmens = parseInt(amensNumberString) + 1
// //debugger;
//     let id = button.id.split("-")[1]
// //debugger;
//     let amensNumberString = parseInt(document.getElementById(`amens-paragraph-${id}`).innerHTML);
// //debugger;
//     let newAmens = amensNumberString + 1
// //debugger;
//     fetch(this.baseUrl + `/${id}`, {
//       method: `PATCH`,
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({amens: newAmens})
//     })
//     .then(response => response.json())
//     .then(jsonizedResponse => console.log(jsonizedResponse))
//     //.console.log(json)
//     // console.log(document.getElementById(`amens-paragraph-${this.id}`))
//     // .then(json => { document.getElementById(`amens-paragraph-${id}`).innerHTML = newAmens
// //may need to use .to_string in line 17.
//   }

}
