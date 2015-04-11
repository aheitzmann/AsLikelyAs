$(document).ready(function(){
  $('#hello').click(function() {
    alert('Ouch!');
  });
});

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}
