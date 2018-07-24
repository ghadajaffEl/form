function validate()
{
      var name = document.forms["frm1"]["name"].value;
      var address= document.forms["frm1"]["address"].value;
      var email = document.forms["frm1"]["email"].value;
      var pwd=document.forms["frm1"]["pwd"].value;
      var comment=document.forms["frm1"]["comment"].value;

   if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (address== "") {
        alert("address must be filled out");
        return false;
    }
    if (email == "") {
        alert("email must be filled out");
        return false;
    }
    if (pwd== "") {
        alert("password must be filled out");
        return false;
    }
    if (comment== "") {
        alert("Comments must be filled out");
        return false;
    }
    if(pwd.length<8)
    {
    	alert("password has less than 8 characters");
    }

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)==false)
  {
  	alert("Doesn't have a valid e-mail adress")
  }


  var regexp=/(\w*\d)(\w*[a-z])(\w*[A-Z])\w/;
  if(regexp.test(pwd)==false)
  {
  	alert("The password must be a combination of charatacters , numbers and at least a capital letter");
  }

}

