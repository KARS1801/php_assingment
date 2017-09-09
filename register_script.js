function validate()
{   
	var name=document.getElementById("username");
	var contact=document.getElementById("contact");
	var pass=document.getElementById("pass");
	var rpass=document.getElementById("rpass");


if(name.value.length<2||name.value.length>20)
	{alert("name should be between 2 to 20 characters");
	 name.focus();
	 name.style.border="3px solid red";
	return false;
}


if(contact.value.length!=10)
	{
	 alert("insert a valid mobile number");
	 contact.focus();
	 contact.style.border="3px solid red"
	return false;};


if(pass.value.length<10)
	{
	 alert("password should have atleast 10 characters");
	 pass.focus();
	 pass.style.border="3px solid red";
	return false;}


if(rpass!=pass)
	{
	 alert("password doesn't match");
	 rpass.focus();
	 rpass.style.border="3px solid red";
	return false;}


	}