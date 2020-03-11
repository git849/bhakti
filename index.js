document.getElementById("demo").addEventListener("click", mySignup);
function mySignup() {
  location.replace("signup.html");
}


// मुख्य पान//
document.getElementById("mukhya").addEventListener("click",myMukhya);

 function myMukhya(){
   location.replace("मुख्य पान.html");
 }

//वधू//
document.getElementById("vadhu").addEventListener("click",myVadhu);

function myVadhu(){
  location.replace("वधू.html");
}

//पुनर्विवाह//
function myPunervivah(){
document.getElementById("myDropdown").classList.toggle("show");
}

//नवीन नाव नोंदणी//
document.getElementById("navNondani").addEventListener("click","navinNavNondani");
function navinNavNondani(){
  location.replace("नवीन नाव नोंदणी.html");
}
