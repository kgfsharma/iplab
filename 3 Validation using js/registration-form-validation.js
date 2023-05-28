function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umgender = document.registration.mgender;
var ufgender = document.registration.fgender; 

if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validgender(umgender,ufgender))
{ }}}}}}}}
return false;
}

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function validgender(umgender,ufgender)
{
x=0;

if(umgender.checked) 
{
x++;
} if(ufgender.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umgender.focus();
return false;
}
else
{
alert(uid);
window.location.reload()
return true;}
}

//Print Button
function showInput(params) {
        document.getElementById('display').innerHTML = 
                    params;

return true;
    }

function CopyElem()
        {
           var params = '';
	   var dummy; 
for( var i=0; i<document.registration.elements.length; i++ )
{
   var fieldType  = document.registration.elements[i].type;
   var fieldName  = document.registration.elements[i].name;
   var fieldValue = document.registration.elements[i].value;
   var x = document.registration.elements[i].checked;
   if(x)
    {
    if(i==7||i==8||i==9||i==10)
     	params +=fieldValue+"  "+'<br>';
    }
  
if(i==0||i==1||i==12||i==13)
params=params;
else if(i==2||i==3||i==4||i==5||i==6||i==11)      
params +=fieldValue+"  "+'<br>';
else
dummy=params; 
    
} 

showInput(params);
        }
