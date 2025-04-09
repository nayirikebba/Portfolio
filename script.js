
//Pour la page index 

function openTab(evt, Name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(Name).style.display = "block";
  
  // Add "active" class to the clicked button
  evt.currentTarget.classList.add("active");
}


// Pour le contact form

function validateForm() {

    var tel = document.getElementById('tel').value;
	const telRegex = /^(0|\+33|0033)[1-9][0-9]{8}$/;

	var mail = document.getElementById('mail').value;
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (!telRegex.test(tel) || !mailRegex.test(mail)) {

        alert("Veuillez saisir un numéro de téléphone et/ou un e-mail valide.");
		return false;
		} else {
			alert("Téléphone et e-mail valides !");
			return true;}
}