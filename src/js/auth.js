import APIRequest from './APIRequest';

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    loginRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}

function loginRequest(email, pass, cb) {
 new APIRequest().makeCorsRequest(email, pass,'POST','api/auth/obtaintoken/', function(response){
//    if (email === 'joe@example.com' && pass === 'password1') {
  console.log('in callback')
  console.log("RESPONSE: "+  JSON.parse(response)["token"])
  let token = JSON.parse(response)["token"]
  if(token){
      console.log(response.token);
        cb({
          authenticated: true,
          token: token
        })
      } else {
        cb({ authenticated: false })
      }
    })
}
/*
var data = new FormData();
data.append("email", "jacob.kyle+clientuser@gmail.com");
data.append("password", "temp1234");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://104.197.191.63/api/auth/obtaintoken/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "8da5aee0-866c-8fef-6ca0-4667429969bd");

xhr.send(data);
*/