document.getElementById("btn").addEventListener("click", getUser);

function getUser() {
  fetch("https://api.github.com/users/ryanod")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data.login);
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(function() {
    console.log("Done");
  })
}

// function getUser() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://api.github.com/users/ryanod", true);

//   xhr.onload = function() {
//     if(this.status == 200) {
//       document.querySelector("h3").innerHTML = JSON.parse(this.responseText).name;
//       document.querySelector("p").innerHTML = JSON.parse(this.responseText).
//     }
//   }
//   xhr.send(null);
//   xhr.addEventListener("load", function() {
//     xhr.getResponseHeader("Last-Modified");
//   })
// }