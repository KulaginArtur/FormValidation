'use strict';

function validate() {
  const firstname = document.getElementById('fname');
  const lastname = document.getElementById('lname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  const postal = document.getElementById('postal');
  const password = document.getElementById('pass');
  const emailvalid = '^[A-Z0-9._%+-]+@[A-Z0-9.-].[A-Z]{2,}$';
  const phonevalid = '^+[0-9]{5,}$';


  if (firstname.value === '' || lastname.value === '' || email.value === ''|| phone.value === ''|| password.value === '') {
    alert('No blank values allowed');
    firstname.style.border = '2px solid red';
    return false;
  } else if(postal.value.length<5){
    alert('Postal code too short');
    postal.style.border = '2px solid red';
    return false;
  } else if (postal.value.length>5){
    alert('Postal code too long');
    postal.style.border = '2px solid red';
    return false;
  } /*else if(email.pattern !== emailvalid ){ // Can't get email or phone validation to work.
    alert('Not valid email');
    email.style.border = '2px solid red';
    return false;
  } else if(phone.pattern !== phonevalid){
    alert('Not valid phone');
    phone.style.border = '2px solid red';
    return false
  } */else{
    return true;
  }
};