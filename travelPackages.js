function formValidation()
{
	var firstName = document.fregistration.Fname;
	return formnValidation(firstName,min,max);
};

function formnValidation(firstName,3,10)
{
	var firstName_len = firstName.value.length;
	if(firstName_len == 0 || firstName_len >= max || firstName_len < min)
	{
		alert("First name in between"+ min + "to" + "max");
		return false;
	}
	else
	{
		return true;
	}
}