// JavaScript Document

function waitForSeconds(x) {
  return new Promise(finished => {
    setTimeout(() => {
      finished("finished processing");
    }, x);
  });
}
async function asyncCall(x) {

if(x!=""){
  document.getElementById('error').innerHTML="";
  document.getElementById('target').innerHTML="Please wait "+ x + " Seconds.";
  var result = await waitForSeconds(parseInt(x*1000));
  document.getElementById('target').innerHTML=result;
  }
  else{
	  document.getElementById('target').innerHTML="";
  document.getElementById('error').innerHTML="Please enter time. Time field cannot be blank.";
  }
  
}

document.getElementById('myButton').onclick = function() {
var tim=document.getElementById("time_to_wait").value;
asyncCall(tim);
};
