function loadSwGuy(swGuy){
  document.getElementById("sw-name").innerHTML = swGuy.name;
}

function getSwGuy(){
  console.log("in get swGuy");
  let guyID = document.getElementById("sw-id").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log("in state exchange");
    if(xhr.readyState == 4 && xhr.status == 200){
      console.log(xhr.responseText);
      var swGuy = JSON.parse(xhr.responseText);
      loadSwGuy(swGuy);
    }
  };
  xhr.open("GET", "https://swapi.dev/api/people/" + guyID, true);
  xhr.send();
}

window.onload = () => {
  console.log("onloading");
  document.getElementById("sw-submit")
          .addEventListener("click", getSwGuy, false);
}