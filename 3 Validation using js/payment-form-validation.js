function paymentValidation()
{
var cardno = document.pay.cardnumber;
var cvvno = document.pay.cvv;
var otpstr = document.pay.otp;
var amt = document.pay.amount;

if(cardnumber_validation(cardno,16))
{
if(cvv_validation(cvvno,3))
{
if(otp_validation(otpstr,8))
{
if(amt_validation(sum,50000))
{ 
}
}
}
}
return false;
}

function cardnumber_validation(cardno,16)
{
var cardno_len = cardno.value.length;
if (cardno_len == 0 || cardno_len > 16 || cardno_len < 16)
{
alert("cardno_ should not be empty / length should be 16 ");
cardno.focus();
return false;
}
return true;
}

function cvv_validation(cvvno,3)
{
var cvv_len = cvvno.value.length;
if (cvv_len == 0 ||cvv >3 || cvv < 3)
{
alert("cvv should not be empty / length should be 3");
cvvno.focus();
return false;
}
return true;
}

function otp_validation(otpstr,8)
{ 
var letters = /^[A-Za-z]+$/;
if(otpstr.value.match(letters))
{
return true;
}
else
{
alert('OTP must have alphabet characters only');
otpstr.focus();
return false;
}
}

function amt_validation(amount,50000)
{
var amnt=amt.value;
if (amnt <= 0 ||amnt >50000 )
{
alert("amount should not be empty / greater than 50000");
sum.focus();
return false;
}
Payment();
return true;
}


function Payment() {
      document.getElementById("demo1").innerHTML="PAYMENT SUCCESSFUL";
   }
