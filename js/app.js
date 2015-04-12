// Scopes
SCOPE_EARTH = 0
SCOPE_POPULATED = 1
SCOPE_METRO = 2
SCOPE_ME = 3

// Sizes
SIZE_REACHED_GROUND = 0
SIZE_CHELYABINSK = 1
SIZE_TUNGUSKA = 2


/* list of probabilites that we can choose from */
var probabilities = [
  {
    'probability': 0.00000005,
    'text': 'you becoming a saint',
    'image': 'url'
  }
];

/* percent of earth's surface area */
var scopes = [
  {
    'id': SCOPE_EARTH,
    'name': 'earth',
    'percent': 1.0
  },
  {
    'id': SCOPE_POPULATED,
    'name': 'populated earth',
    'percent': 0.029
  },
  {
    'id': SCOPE_METRO,
    'name': 'metro',
    'percent': 0.0087
  },
  {
    'id': SCOPE_ME,
    'name': 'me',
    'percent': 0.0000000019607843
  }
];

/* bolide events / likelihood */
var sizes = [
  {
    'id': SIZE_REACHED_GROUND,
    'name': 'meteorite',
    'number_per_year': 10950.0
  },
  {
    'id': SIZE_CHELYABINSK,
    'name': 'Chelyabinsk',
    'number_per_year': 0.03333333333
  },
  {
    'id': SIZE_TUNGUSKA,
    'name': 'Tunguska',
    'number_per_year': 0.001
  }
];

/* text to be shown at intersection */
var crossProducts = [
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_REACHED_GROUND,
    'text': 'These are some interesting facts!'
  }
];


$(document).ready(function(){
  $('#hello').click(function() {
    alert('Ouch!');
  });
});

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
}

function displayResult(scopeId, sizeId) {

  // get the element that will hold our results
  var p = $('#result');

  // find the scope
  var scope = findScopeById(scopeId);
  if (!scope) {
    p.html('Scope not found.');
    return;
  }

  // find the size
  var size = findSizeById(sizeId);
  if (!size) {
    p.html('Size not found.');
    return;
  }

  // find the cross product of scope and size
  var crossProduct = findCrossProductOfScopeAndSize(scope, size);
  if (!crossProduct) {
    p.html('No data available for ' + scope.name + ' and ' + size.name);
    return;
  }

  // fill in text
  p.html(crossProduct.text);
}

/* DB functions and stuff */


function findScopeById(scopeId) {
  return _.find(scopes, function(scope) {
    return scope.id == scopeId;
  });
}

function findSizeById(sizeId) {
  return _.find(sizes, function(size) {
    return size.id == sizeId;
  });
}

function findCrossProductOfScopeAndSize(scope, size) {
  return _.find(crossProducts, function(crossProduct) {
    return crossProduct.scope_id == scope.id && crossProduct.size_id == size.id;
  });
}

