import { extendObservable, mobx, autorun } from 'mobx';
// import { mobx } from 'mobx';

export default class UserStore {
  constructor() {
    extendObservable(this, {
      pets: []
    });

    autorun(() => console.log('autorunning.....'))

    // this.pets = [];
    // observable(pets);
    this.getCookie = this.getCookie.bind(this);
    this.getUserFromDb = this.getUserFromDb.bind(this);
    this.getCookie = this.getCookie.bind(this);
  }

  getUserFromDb() {
    fetch("/user/userData",{
      method:"GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + this.getCookie('token')
      },
    })
    .then(result => result.json())
    .then(data => {
      console.log(data.pets);
      this.pets = data.pets;
      // data.pets.forEach((pet) => this.pets.push(pet))
      console.log('hey, I just changed this.pets');
      console.log(this.pets);
      return data.pets;
    })
    // .then(data => this.pets = data.pets);

  }

  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
