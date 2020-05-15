function pow(event){
  let element = event.currentTarget;
  element.style.backgroundColor = "green";
  alert(element.id);
}

window.onload = function(){
  this.document.getElementById("a").addEventListener("click", pow, false);
}