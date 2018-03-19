function formValidation(){
	var uid = document.registration.Uname;
	var upass1 = document.registration.Upass;
	var email1 = document.registration.Uemail;
	var uadd1 = document.registration.Ucpass;
	
	return userformValidation(uid,5,14);
	return userpassformValidation(upass1,4,10);
	return useremailformValidation(uemail1);
	return useruaddformValidation(ucpass);
	
};

function userformValidation(uid,min,max)
{
	//var letters = /^[A-Za-z]+$/;
	//if(uid.value.match(letters))
	//{
			var uid_len = uid.value.length;
			if(uid.len == 0 || uid_len >= max || uid_len < min)
				{
					//var letters = /^[A-Za-z]+$/;
					//if(uid.value.match(letters))
					//{
					alert("Username would not be empty or it's between"+min+"to"+max);
					uid.focus();
					return false;
					
				}
				else
				{
					return true;
				}
				
	
};



function userpassformValidation(upass1,min,max)
{
	//var letters = /^[A-Za-z0-9]+$/;
	//if(upass1.value.match(letters))
	//{
		var upass1_length = upass1.value.length;
			if(upass1_length == 0 || upass1_length >= max || upass1_length < min)
				{
					alert("Password would not be empty or it's between"+min+"to"+max);
					return false;
				}
			else
				{
					return true;
				}

	//}
}

function useremailformValidation(email1)
{
	var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email1.value.match(letters))
		{
			return true;
		}
	else
		{
			alert("please enter valid password");
			return false;
		}	
}

function useraddformValidation(uadd1)
{
	var letters = /^\w+[A-Za-z0-9]+$/;
	if(uadd1.value.match(letters))
		{
			return true;
		}
	else
		{
			alert("please enter valid address");
			return false;
		}	
}