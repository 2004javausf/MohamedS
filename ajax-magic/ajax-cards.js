function loadCard(card){
  document.getElementById("card-name").innerHTML = card.card.name;
  document.getElementById("card-info").innerHTML = card.card.text;
}

function getCard(){
  console.log("getting card");
  let cardID = document.getElementById("card-id").value;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = ()=>{
    console.log("exchanging state...");
    if(xhr.readyState == 4 && xhr.status == 200){
      console.log(xhr.responseText);
      var card = JSON.parse(xhr.responseText);
      loadCard(card);
    }
  };
  xhr.open("GET", "https://api.magicthegathering.io/v1/cards/"
          + cardID, true);
  xhr.send();
}

window.onload = ()=>{
  console.log("loading...");
  document.getElementById("card-submit")
          .addEventListener("click", getCard, false);
}