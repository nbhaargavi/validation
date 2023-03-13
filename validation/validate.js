let nameInvalid = document.getElementById('p1');
let mailInvalid = document.getElementById('p2');
let numInvalid = document.getElementById('p3');
let dateInvalid = document.getElementById('p4');
let submitInvalid = document.getElementById('s1');
function name_valid()
{
    let namee = document.getElementById('nameid').value;
    let pattern = /\D/;
    if(!namee.match(pattern))
    {
        nameInvalid.innerHTML= 'Name field cannot be empty';
        return false;
    }
    if(namee.length == 0)
    {
        nameInvalid.innerHTML = 'invalid name';
        return false;
    } else{
    nameInvalid.innerHTML= 'valid';
     nameInvalid.style.color = "#008000";
    return true;}

}

function mail_valid(){
    let mail =  document.getElementById('mailid').value;
    let pattern =/^[a-zA-Z0-9_.]+@[a-zA-Z0-9._]$/;
    if(mail.match(pattern))
    {
        mailInvalid.innerHTML = "valid";
        return true;
    }
    if(mail.length == 0)
    {
        mailInvalid.innerHTML = 'required';
        return false;
    }
    else{
    mailInvalid.innerHTML = "valid";
    mailInvalid.style.color = "#008000";
        return true;}

}

function phno_valid()
{
    let number = document.getElementById('phnoid').value;
    let pattern = /^\d{10}$/;
    if(number.match(pattern))
    {
        numInvalid.innerHTML = "valid";
        numInvalid.style.color = "#008000";
        return true;
    }
    if(number.length == 0)
    {
        numInvalid.innerHTML = 'Enter 10 digit phn number';
        return false;
    } 
    else{
        numInvalid.innerHTML = "Invalid phno";
        return false;}
}

function date_valid()
{
    let dat = document.getElementById("dateid").value;
    if(dat == '')
    {
        dateInvalid.innerHTML = "required dob";
        return false;
    }else{
    dateInvalid.innerHTML = "valid";
    dateInvalid.style.color = "#008000";
    return true;}
}

function sub()
{
    if(!name_valid() || !mail_valid()  || !phno_valid()|| !date_valid())
    {
        submitInvalid.innerHTML = "Fill the requirements to continue";
          return false;
    }
    else{
     submitInvalid.innerHTML = "";
    refresh();
 }
}
function refresh()
{
    document.getElementById("nameid").value = '';
    document.getElementById("mailid").value = '';
    document.getElementById("phnoid").value = '';
    document.getElementById("dateid").value = '';
}
