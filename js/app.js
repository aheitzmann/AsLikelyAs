/* all the data */

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
    "text":"that you were named after a relative",
    "probability":0.6,
    "category":"name",
    "source":"http://www.weirdfacts.com/fun-facts-a-stuff/3061-percents-and-stats.html"
  },
  {
    "text":"that you'll flip heads in a coin flip",
    "probability":0.5,
    "category":"",
    "source":""
  },
  {
    "text":"that you are a native speaker of Mandarin",
    "probability":0.144,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers"
  },
  {
    "text":"that today is Saturday",
    "probability":0.1428571429,
    "category":"time",
    "source":""
  },
  {
    "text":"that you will die of heart disease",
    "probability":0.1428571429,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/"
  },
  {
    "text":"that you will get flu this year",
    "probability":0.1,
    "category":"",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that your application to Harvard will be accepted",
    "probability":0.059,
    "category":"",
    "source":"http://www.businessinsider.com/things-harder-than-getting-to-harvard-2014-9"
  },
  {
    "text":"that you are a twin",
    "probability":0.032,
    "category":"",
    "source":"http://sites.la.utexas.edu/twinproject/facts-and-figures/"
  },
  {
    "text":"that you are a native speaker of Javanese",
    "probability":0.0125,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers"
  },
  {
    "text":"that a dollar you paid in tax went to NASA",
    "probability":0.005,
    "category":"",
    "source":"http://en.wikipedia.org/wiki/Budget_of_NASA"
  },
  {
    "text":"that a random person has the same birthday as you",
    "probability":0.002739726027,
    "category":"",
    "source":""
  },
  {
    "text":"that today is Pi day",
    "probability":0.002739726027,
    "category":"time",
    "source":""
  },
  {
    "text":"that you were born with 11 fingers or toes",
    "probability":0.002,
    "category":"",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you"
  },
  {
    "text":"that you will die of heart disease next year",
    "probability":0.001872659176,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/"
  },
  {
    "text":"that you are a native speaker of Quechua",
    "probability":0.0013,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers"
  },
  {
    "text":"that you are a native speaker of Swedish",
    "probability":0.0013,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers"
  },
  {
    "text":"that today is February 29",
    "probability":0.0006844626968,
    "category":"time",
    "source":""
  },
  {
    "text":"that you will die of surgical complications",
    "probability":0.0006329113924,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/"
  },
  {
    "text":"that you will die next year at home",
    "probability":0.000126984127,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php"
  },
  {
    "text":"that, if you are American, your name is James Smith",
    "probability":0.0001212436709,
    "category":"name",
    "source":"http://www.statista.com/statistics/279713/frequent-combinations-of-first-and-last-name-in-the-us/"
  },
  {
    "text":"that, if you are American, your name is Maria Garcia",
    "probability":0.000101556962,
    "category":"name",
    "source":"http://www.statista.com/statistics/279713/frequent-combinations-of-first-and-last-name-in-the-us/"
  },
  {
    "text":"that you will die next year in a car accident",
    "probability":0.00005673758865,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php"
  },
  {
    "text":"that you will die next year at work",
    "probability":0.00003500052501,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php"
  },
  {
    "text":"that you will go blind if you get laser eye surgery",
    "probability":0.00001166670556,
    "category":"",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you"
  },
  {
    "text":"that you will die in a house fire next year",
    "probability":0.000007024987882,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/"
  },
  {
    "text":"that you will die in an airplane crash",
    "probability":0.000002822315484,
    "category":"death",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you"
  },
  {
    "text":"that you will die next year falling out of a building",
    "probability":0.000001934423058,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php"
  },
  {
    "text":"that you'll get a royal flush in poker on the first five cards dealt",
    "probability":0.000001539077169,
    "category":"",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that you will win an Olympic medal",
    "probability":0.000001510574018,
    "category":"",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that you will become president",
    "probability":1e-7,
    "category":"career",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that you will become an astronaut",
    "probability":7.575757576e-8,
    "category":"career",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that you will be made a saint",
    "probability":5e-8,
    "category":"saint",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that you have the winning Mega Millions lottery ticket",
    "probability":7.399409468e-9,
    "category":"",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you"
  },
  {
    "text":"that you will die from a shark attack",
    "probability":3.333333333e-9,
    "category":"death",
    "source":"http://www.funny2.com/odds.htm"
  },
  {
    "text":"that you will be killed this year by a falling vending machine",
    "probability":1.857142857e-9,
    "category":"death",
    "source":"http://www.weirdfacts.com/fun-facts-a-stuff/3061-percents-and-stats.html"
  }
];

/* percent of earth's surface area */
var scopes = [
  {
    'id': SCOPE_EARTH,
    'name': 'earth',
    'description': 'any place on earth',
    'percent': 1.0
  },
  {
    'id': SCOPE_POPULATED,
    'name': 'populated earth',
    'description': 'anywhere populated',
    'percent': 0.029
  },
  {
    'id': SCOPE_METRO,
    'name': 'metro',
    'description': 'an urban area',
    'percent': 0.0087
  },
  {
    'id': SCOPE_ME,
    'name': 'me',
    'description': 'you',
    'percent': 0.000000000000001960399922
  }
];

/* bolide events / likelihood */
var sizes = [
  {
    'id': SIZE_REACHED_GROUND,
    'name': 'meteorite',
    'description': 'a meteorite',
    'number_per_year': 10950.0
  },
  {
    'id': SIZE_CHELYABINSK,
    'name': 'Chelyabinsk',
    'description': 'an airburst like the Chelyabinsk event',
    'number_per_year': 0.03333333333
  },
  {
    'id': SIZE_TUNGUSKA,
    'name': 'Tunguska',
    'description': 'a meteorite like the Tunguska event',
    'number_per_year': 0.001
  }
];

/* text to be shown at intersection */
var crossProducts = [
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_REACHED_GROUND,
    'text': 'a'
  },
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_CHELYABINSK,
    'text': 'b'
  },
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_TUNGUSKA,
    'text': 'c'
  },
  {
    'scope_id': SCOPE_POPULATED,
    'size_id': SIZE_REACHED_GROUND,
    'text': 'd'
  },
  {
    'scope_id': SCOPE_POPULATED,
    'size_id': SIZE_CHELYABINSK,
    'text': 'e'
  },
  {
    'scope_id': SCOPE_POPULATED,
    'size_id': SIZE_TUNGUSKA,
    'text': 'f'
  },
  {
    'scope_id': SCOPE_METRO,
    'size_id': SIZE_REACHED_GROUND,
    'text': 'g'
  },
  {
    'scope_id': SCOPE_METRO,
    'size_id': SIZE_CHELYABINSK,
    'text': 'h'
  },
  {
    'scope_id': SCOPE_METRO,
    'size_id': SIZE_TUNGUSKA,
    'text': 'i'
  },
  {
    'scope_id': SCOPE_ME,
    'size_id': SIZE_REACHED_GROUND,
    'text': 'j'
  },
  {
    'scope_id': SCOPE_ME,
    'size_id': SIZE_CHELYABINSK,
    'text': 'k'
  },
  {
    'scope_id': SCOPE_ME,
    'size_id': SIZE_TUNGUSKA,
    'text': 'l'
  }
];

/* all the code */

$(document).ready(function() {
  inputChanged();
});

function inputChanged() {
	displayResult($("#area_scope_slider").val(), $("#event_size_slider").val());
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

  var probability_elements = getProbabilityNear(scope.percent * size.number_per_year, 2);

  // fill in text
  p.html(crossProduct.text);

  if (_.size(probability_elements) > 0) {
    p.html(getProbabilityComparisonText(scope, size, probability_elements[0]));
  } else {
    p.html("NO SIMILAR PROBABILITIES");
  }
}

function getProbabilityComparisonText(scope, size, probability_examples) {
  var text = 'The chance that some time in the next year, ' +
              size.description +
              ' will impact ' +
              scope.description +
              ' is about the same as the chance ';

  // Sort the probability examples by category and saintliness.
  probability_examples = _.sortBy(probability_examples, function(example) {
    return example.category == "saint" ? 2
         : example.category == "death" ? 1
         : 0;
  });

  var probability_texts = _.map(probability_examples, function(example) {
    return example.text;
  });
  text = text + probability_texts.join(' and ') + '.';

  return text;
}

function between(val, lo, hi) {
  return val < hi && val > lo;
}

function getProbabilityNear(target, similarity) {
  var high = target * similarity;
  var low = target / similarity;

  var similar = [];

  _.each(probabilities, function(probability1) {
    if (between(probability1.probability, low, high)) {
      similar.push([probability1]);
    }

    _.each(probabilities, function(probability2) {
      if (probability1 == probability2) return;
      if (probability1.category != "" && probability1.category == probability2.category) return;

      var combined_prob = probability1.probability * probability2.probability;
      if (between(combined_prob, low, high)) {
        similar.push([probability1, probability2]);
      }
    });
  });

  return _.sample(similar, 1);
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

