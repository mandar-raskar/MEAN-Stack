function formValidation(){
	var uid = document.registration.user_id;
	var upass1 = document.registration.upass;
	var email1 = document.registration.uemail;
	var uadd1 = document.registration.uadd;
	var ugen1 = document.registration.ugen;
	var skills1 = document.registration.uskills;
	var ucountry1 = document.registration.ucountry;
	return userformValidation(uid,5,14);
	return userpassformValidation(upass1,4,10);
	return useremailformValidation(uemail1);
	return useruaddformValidation(uadd1);
	return userugenformValidation(ugen1);
	return userskillsformValidation(skills1);
	return usercountryformValidation(ucountry1);

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

function usercountryformValidation(ucountry1)
{
	if(skills1.selected == "default")
	{
		alert("Please select country");
		return false;
	}
	else
	{
		return true;
	}
}

function userugenformValidation(ugen1)
{
	if(ugen1 != checked)
	{
		alert("Please select the gender");
		return false;
	}
	else
	{
		return true;
	}
}