
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
	var isValid = true;

	// get values for user entries 
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var terms = $("terms").checked; //return true or false indicates whether a check box is checked or not
	
	//remove validity messages if there is any
	$("email_address").nextElementSibling.textContent  = "";	
	$("phone").nextElementSibling.textContent  = "";
	$("country").nextElementSibling.textContent  = "";
	$("terms").nextElementSibling.textContent  = "";	
	
	// check user entries for validity
    if (email === "") {
        $("email_address").nextElementSibling.textContent = "This field is required.";
		isValid = false;	
    }
	
	if (phone === "") {
        $("phone").nextElementSibling.textContent  = "This field is required.";
		isValid = false;
    }
	
    if (country === "") {
        $("country").nextElementSibling.textContent  = "Please select a country.";
		isValid = false;
    }
	
	if (terms === false) {
        $("terms").nextElementSibling.textContent  = "This box must be checked.";
		isValid = false;
    }
	
    if(isValid)
	{
		$("registration_form").submit();  //submit registration form
	}
};

var resetForm = function() {
    $("registration_form").reset();
	$("email_address").nextElementSibling.textContent = "*";
	$("phone").nextElementSibling.textContent = "*";	
	$("country").nextElementSibling.textContent = "*";	
	$("terms").nextElementSibling.textContent = "*";
    $("email_address").focus();
};

$("register").onclick = processEntries;
$("reset_form").onclick = resetForm;

//step 1: hide mailingaddress box and label, hide comments box and label
window.onload = function(){
	var mail = $("mailingaddress");
	var comments = $("comments");

	mail.classList.toggle('hide');
	mail.previousElementSibling.classList.toggle('hide');
	comments.classList.toggle('hide');
	comments.previousElementSibling.classList.toggle('hide');
}

//step 2: define event handler function and add event listener to hide or show mailing address box and label when radio buttons are clicked. 
//show mailing addess box and label only when mail button is clicked, when other buttons are clicked, hide mailing address box and label

var mailFunction = function(){
	var mail = $("mailingaddress");
	var mailRadio = $("mail");

	if(mailRadio.checked){
		mail.classList.remove('hide');
		mail.previousElementSibling.classList.remove('hide');
	}else{
		mail.classList.add('hide');
		mail.previousElementSibling.classList.add('hide');
	}
}

$("mail").addEventListener('click', mailFunction);
$("email").addEventListener('click', mailFunction);
$("mphone").addEventListener('click', mailFunction);
$("none").addEventListener('click', mailFunction);

//step 3: define event handler functionn and add event listener to hide or show comment box and label when check box is clicked. 
//show comment box and label only when check box is checked. when check box is unchecked, hide comment box and label

   
var termsFunction = function(){
	var comments = $("comments");
	var termsBox = $("terms");

	if(termsBox.checked){
		comments.classList.remove('hide');
		comments.previousElementSibling.classList.remove('hide');
	}else{
		comments.classList.add('hide');
		comments.previousElementSibling.classList.add('hide');
	}
}

$("terms").addEventListener('click', termsFunction);