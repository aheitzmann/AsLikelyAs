// Scopes
SCOPE_EARTH = 0
SCOPE_POPULATED = 1
SCOPE_METRO = 2
SCOPE_ME = 3

// Sizes
SIZE_REACHED_GROUND = 0
SIZE_CHELYABINSK = 1
SIZE_TUNGUSKA = 2

$(document).ready(function(){
  $('#hello').click(function() {
    alert('Ouch!');
  });
});

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}


function displayResult(scope, size) {
    // TODO: Walter fill this in
}