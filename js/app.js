/* all the data */

// Scopes
SCOPE_EARTH = 0
SCOPE_POPULATED = 1
SCOPE_METRO = 2
SCOPE_ME = 3

// Sizes
SIZE_AUDIBLE = 0
SIZE_CHELYABINSK = 1
SIZE_TUNGUSKA = 2


/* list of probabilites that we can choose from */
var probabilities = [
  {
    "text":"that you were named after a relative",
    "probability":0.6,
    "category":"name",
    "source":"http://www.weirdfacts.com/fun-facts-a-stuff/3061-percents-and-stats.html",
    "image_source":"http://pixabay.com/p-149866/?no_redirect",
    "image": "images/probz/named-after-relative.png"
  },
  {
    "text":"that you'll flip heads in a coin flip",
    "probability":0.5,
    "category":"",
    "source":"",
    "image_source":"http://nesterko.com/lectures/stat221-2012/lecture13/coinflip.gif",
    "image": "images/probz/coinflip.gif"
  },
  {
    "text":"that you are a native speaker of Mandarin",
    "probability":0.144,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers",
    "image_source":"https://translate.google.com/",
    "image": "images/probz/mandarin.png"
  },
  {
    "text":"that today is Saturday",
    "probability":0.1428571429,
    "category":"time",
    "source":"",
    "image_source":"http://pixabay.com/p-460676/?no_redirect",
    "image": "images/probz/saturday.png"
  },
  {
    "text":"that you will get flu this year",
    "probability":0.1,
    "category":"",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"",
    "image": "images/probz/flu.png"
  },
  {
    "text":"that your application to Harvard will be accepted",
    "probability":0.059,
    "category":"",
    "source":"http://www.businessinsider.com/things-harder-than-getting-to-harvard-2014-9",
    "image_source":"",
    "image": "images/probz/harvard.png"
  },
  {
    "text":"that you are a twin",
    "probability":0.032,
    "category":"",
    "source":"http://sites.la.utexas.edu/twinproject/facts-and-figures/",
    "image_source":"https://openclipart.org/image/300px/svg_to_png/152503/Petroglyph-Twins.png",
    "image": "images/probz/twins.png"
  },
  {
    "text":"that you are a native speaker of Javanese",
    "probability":0.0125,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers",
    "image_source":"https://translate.google.com/",
    "image": "images/probz/javanese.png"
  },
  {
    "text":"that a dollar you paid in tax went to NASA",
    "probability":0.005,
    "category":"",
    "source":"http://en.wikipedia.org/wiki/Budget_of_NASA",
    "image_source":"",
    "image": "images/probz/nasa.png"
  },
  {
    "text":"that a random person has the same birthday as you",
    "probability":0.002739726027,
    "category":"",
    "source":"",
    "image_source":"",
    "image": "images/probz/same-birthday.png"
  },
  {
    "text":"that today is Pi day",
    "probability":0.002739726027,
    "category":"time",
    "source":"",
    "image_source":"http://pixabay.com/p-460676/?no_redirect",
    "image": "images/probz/pi-day.png"
  },
  {
    "text":"that you were born with 11 fingers or toes",
    "probability":0.002,
    "category":"",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you",
    "image_source":"",
    "image": "images/probz/11-fingers.png"
  },
  {
    "text":"that you will die of heart disease next year",
    "probability":0.001872659176,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/",
    "image_source":"",
    "image": "images/probz/heart-disease.png"
  },
  {
    "text":"that you are a native speaker of Quechua",
    "probability":0.0013,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers",
    "image_source":"http://www.omniglot.com/language/phrases/quechua.php",
    "image": "images/probz/quechua.png"
  },
  {
    "text":"that you are a native speaker of Swedish",
    "probability":0.0013,
    "category":"language",
    "source":"http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers",
    "image_source":"https://translate.google.com/",
    "image": "images/probz/swedish.png"
  },
  {
    "text":"that today is February 29",
    "probability":0.0006844626968,
    "category":"time",
    "source":"",
    "image_source":"http://pixabay.com/p-460676/?no_redirect",
    "image": "images/probz/feb-29.png"
  },
  {
    "text":"that you will die of surgical complications",
    "probability":0.0006329113924,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Surgical_instruments_for_the_use_in_military_surgery%3B_anon._Wellcome_M0010398EA.jpg/728px-Surgical_instruments_for_the_use_in_military_surgery%3B_anon._Wellcome_M0010398EA.jpg",
    "image": "images/probz/surgery.jpg"
  },
  {
    "text":"that you will die next year at home",
    "probability":0.000126984127,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php",
    "image_source":"",
    "image": "images/probz/dead-at-home.png"
  },
  {
    "text":"that, if you are American, your name is James Smith",
    "probability":0.0001212436709,
    "category":"name",
    "source":"http://www.statista.com/statistics/279713/frequent-combinations-of-first-and-last-name-in-the-us/",
    "image_source":"",
    "image": "images/probz/james-smith.png"
  },
  {
    "text":"that, if you are American, your name is Maria Garcia",
    "probability":0.000101556962,
    "category":"name",
    "source":"http://www.statista.com/statistics/279713/frequent-combinations-of-first-and-last-name-in-the-us/",
    "image_source":"",
    "image": "images/probz/maria-garcia.png"
  },
  {
    "text":"that you will die next year in a car accident",
    "probability":0.00005673758865,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php",
    "image_source":"https://openclipart.org/image/300px/svg_to_png/94567/car-accident.png",
    "image": "images/probz/car-accident.png"
  },
  {
    "text":"that you will die in an earthquake",
    "probability":0.000007582075972,
    "category":"death",
    "source":"http://www.livescience.com/3780-odds-dying.html",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/9/9f/Valdivia_after_earthquake,_1960.jpg",
    "image": "images/probz/earthquake.jpg"
  },
  {
    "text":"that you will die in a house fire next year",
    "probability":0.000007024987882,
    "category":"death",
    "source":"http://www.washingtonpost.com/wp-srv/special/world/how-deadly-is-ebola/",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/9/96/ShadowRidgeRoadFire.JPG",
    "image": "images/probz/house-fire.jpg"
  },
  {
    "text":"that you will die in an airplane crash",
    "probability":0.000002822315484,
    "category":"death",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/3/33/JRM_Marshall_Mars_burning_5Apr1950.jpg",
    "image": "images/probz/plane-crash.jpg"
  },
  {
    "text":"that you will die next year falling out of a building",
    "probability":0.000001934423058,
    "category":"death",
    "source":"http://www.riskcomm.com/visualaids/riskscale/datasources.php",
    "image_source":"",
    "image": "images/probz/falling-out-of-building.png"
  },
  {
    "text":"that you'll get a royal flush in poker on the first five cards dealt",
    "probability":0.000001539077169,
    "category":"",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/1/10/Royal_flush.JPG",
    "image": "images/probz/royal-flush.jpg"
  },
  {
    "text":"that you will win an Olympic medal",
    "probability":0.000001510574018,
    "category":"",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/a/a7/Olympic_flag.svg",
    "image": "images/probz/olympics.svg"
  },
  {
    "text":"that you will become president",
    "probability":1e-7,
    "category":"career",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/3/36/Seal_of_the_President_of_the_United_States.svg",
    "image": "images/probz/presideng.svg"
  },
  {
    "text":"that you will become an astronaut",
    "probability":7.575757576e-8,
    "category":"career",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/2/24/Astronaut-EVA_edit3.png",
    "image": "images/probz/astronaut.png"
  },
  {
    "text":"that you will be made a saint",
    "probability":5e-8,
    "category":"saint",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/d/dc/Saint_Peter_the_Aleut.jpg",
    "image": "images/probz/saint2.jpg"
  },
  {
    "text":"that you have the winning Mega Millions lottery ticket",
    "probability":7.399409468e-9,
    "category":"",
    "source":"http://www.sheknows.com/living/articles/1023453/what-are-the-odds-21-statistics-that-will-surprise-you",
    "image_source":"https://farm3.staticflickr.com/2440/3856718374_77d28f4f1d_o.jpg",
    "image": "images/probz/lottery.jpg"
  },
  {
    "text":"that you will die from a shark attack",
    "probability":3.333333333e-9,
    "category":"death",
    "source":"http://www.funny2.com/odds.htm",
    "image_source":"http://upload.wikimedia.org/wikipedia/commons/7/79/Tiger_shark_drawing.svg",
    "image": "images/probz/shark.svg"
  },
  {
    "text":"that you will be killed this year by a falling vending machine",
    "probability":1.857142857e-9,
    "category":"death",
    "source":"http://www.weirdfacts.com/fun-facts-a-stuff/3061-percents-and-stats.html",
    "image_source":"https://c1.staticflickr.com/1/187/483187235_3ecb3f307b.jpg",
    "image": "images/probz/vending-machine.jpg"
  }
];

/* percent of earth's surface area */
var scopes = [
  {
    'id': SCOPE_EARTH,
    'name': 'earth',
    'description': 'some place on earth',
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
    'percent': 0.000000000000001960399922,
    'percent_by_size': {
      0: 0.00001418626,  // Audible up to 30 miles away.
      1: 0.00010206182,  // 80 miles of destruction on each side.
      2: 0.00000416243  // Destroyed 800 square miles.
    }
  }
];

/* bolide events / likelihood */
var sizes = [
  {
    'id': SIZE_AUDIBLE,
    'name': 'fireball',
    'description': 'a fireball big enough to be audible',
    'number_per_year': 18250.0,
    'event_title': 'Audible fireballs',
    'text': 'Fireballs are actually very common - thousands of meteors bright enough to be considered fireballs hit Earth every day. If it\'s big enough, and explodes, you might even be able to hear it - about 50 meteors this big hit every day. NASA reported 76 airbursts that exploded with the force of at least 200 pounds of TNT since 2009. Almost all of these explosions are small enough and high enough, though, that nothing on the ground would have been damaged.',
    'text_sources': [
      'http://www.amsmeteors.org/fireballs/faqf/#2',
      'http://www3.nd.edu/~nsl/Lectures/phys205/pdf/Nuclear_Warfare_8.pdf',
      'http://neo.jpl.nasa.gov/fireball/',
      'http://www.space.com/15353-meteor-showers-facts-shooting-stars-skywatching-sdcmp.html'
    ]
  },
  {
    'id': SIZE_CHELYABINSK,
    'name': 'Chelyabinsk',
    'description': 'an airburst like the Chelyabinsk event',
    'number_per_year': 0.03333333333,
    'event_title': 'Chelyabinsk event',
    'text': 'On February 15, 2013, a meteorite exploded in an airburst at an altitude of 30 km, releasing energy 30 times greater than that of the atomic bomb dropped at Hiroshima. At its peak, the meteor was brighter than the sun. The blast from the explosion seriously injured 1500 people and damaged buildings across six cities in the region.',
    'text_sources': [
      'http://en.wikipedia.org/wiki/Chelyabinsk_meteor',
      'http://www.theguardian.com/science/2013/nov/06/chelyabinsk-meteor-russia',
    ]
  },
  {
    'id': SIZE_TUNGUSKA,
    'name': 'Tunguska',
    'description': 'an airburst like the Tunguska event',
    'number_per_year': 0.001,
    'event_title': 'Tunguska event',
    'text': 'On June 30, 1908, a meteorite exploded in an airburst at an altitude of 5-10 km in eastern Russia, releasing energy 1000 times greater than that of of the atomic bomb dropped on Hiroshima. The blast leveled about 2000 square kilometers of forest and broke windows 100s of kilometers away.',
    'text_sources': [
      'http://en.wikipedia.org/wiki/Tunguska_event'
    ]
  }
];

/* text to be shown at intersection */
var crossProducts = [
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_AUDIBLE,
    'text': 'Most fireballs occur over ocean or unpopulated areas. If a meteor falls in the forest and no one is there to hear it...',
    'text_sources': [],
    'image': 'images/anywhere-fireball.png',
    'image_source': 'http://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg',
  },
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_CHELYABINSK,
    'text': 'Most airbursts will occur over ocean or unpopulated areas. A Chelyabinsk-sized airburst might burn a little foliage.',
    'text_sources': [],
    'image': 'images/anywhere-chelyabinsk.png',
    'image_source': 'http://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg',
  },
  {
    'scope_id': SCOPE_EARTH,
    'size_id': SIZE_TUNGUSKA,
    'text': 'Even a Tunguska-sized airburst would probably cause little harm if it struck the ocean or an unpopulated area. A deep ocean strike even of this size poses negligible tsunami risk to humanity.',
    'text_sources': [
      'http://mpainesyd.com/idisk/Public/paine_tsunami_asteroid99.pdf'
    ],
    'image': 'images/anywhere-tunguska.png',
    'image_source': 'http://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg',
  },
  {
    'scope_id': SCOPE_POPULATED,
    'size_id': SIZE_AUDIBLE,
    'text': 'Even though fireballs of this magnitude are common enough that they are commonly visible from populated areas, they are often not observed if they happen when it\'s too bright, when people are sleeping, or just when nobody is looking!',
    'text_sources': [],
    'image': 'images/populated-fireball.png',
    'image_source': 'http://pixabay.com/p-158763/?no_redirect',
  },
  {
    'scope_id': SCOPE_POPULATED,
    'size_id': SIZE_CHELYABINSK,
    'text': '',
    'text_sources': [],
    'image': 'images/populated-chelyabinsk.png',
    'image_source': 'http://pixabay.com/p-158763/?no_redirect',
  },
  {
    'scope_id': SCOPE_POPULATED,
    'size_id': SIZE_TUNGUSKA,
    'text': '',
    'text_sources': [],
    'image': 'images/populated-tunguska.png',
    'image_source': 'http://pixabay.com/p-158763/?no_redirect',
  },
  {
    'scope_id': SCOPE_METRO,
    'size_id': SIZE_AUDIBLE,
    'text': 'A fireball near a city will probably make the news, but it\'s nothing to worry about.',
    'text_sources': [
      'http://www.lohud.com/story/news/local/2014/12/30/fireball-lights-sky-new-york/21039521/'
    ],
    'image': 'images/nyc-fireball.png',
    'image_source': 'http://upload.wikimedia.org/wikipedia/commons/4/41/NYC_Skyline_Silhouette.png',
  },
  {
    'scope_id': SCOPE_METRO,
    'size_id': SIZE_CHELYABINSK,
    'text': '',
    'text_sources': [],
    'image': 'images/nyc-chelyabinsk.png',
    'image_source': 'http://upload.wikimedia.org/wikipedia/commons/4/41/NYC_Skyline_Silhouette.png',
  },
  {
    'scope_id': SCOPE_METRO,
    'size_id': SIZE_TUNGUSKA,
    'text': 'An airburst like the Tunguska event would be capable of completely destroying a major metropolitan area. It is estimated that an explosion of this size above New York would result in something like 3.9 million fatalities and 1.5 trillion dollars of property loss.',
    'text_sources': [
      'http://en.wikipedia.org/wiki/Tunguska_event',
      'http://link.springer.com/article/10.1007/s11069-010-9597-3'
    ],
    'image': 'images/nyc-tunguska.png',
    'image_source': 'http://upload.wikimedia.org/wikipedia/commons/4/41/NYC_Skyline_Silhouette.png',
  },
  {
    'scope_id': SCOPE_ME,
    'size_id': SIZE_AUDIBLE,
    'text': 'If you see or hear a fireball, report it to the American Meteor Society!',
    'text_sources': ['http://www.amsmeteors.org/members/imo/report_intro'],
    'image': 'images/you-fireball.png'
  },
  {
    'scope_id': SCOPE_ME,
    'size_id': SIZE_CHELYABINSK,
    'text': '',
    'text_sources': [],
    'image': 'images/you-chelyabinsk.png'
  },
  {
    'scope_id': SCOPE_ME,
    'size_id': SIZE_TUNGUSKA,
    'text': '',
    'text_sources': [],
    'image': 'images/you-tunguska.png'
  }
];

/* all the code */

$(document).ready(function() {
  inputChanged();
});

function inputChanged() {
	displayResult($("#area_scope_slider").val(), $("#event_size_slider").val());
}

function getScopeSizeProbability(scope, size) {
  if (scope.id == SCOPE_ME) {
    return scope.percent_by_size[size.id] * size.number_per_year;
  } else {
    return scope.percent * size.number_per_year;
  }
}

function displayResult(scopeId, sizeId) {

  /* do a lookup from our "db" */
  var scope = findScopeById(scopeId);
  var size = findSizeById(sizeId);
  var crossProduct = findCrossProductOfScopeAndSize(scope, size);

  /* show text in probability paragraph */
  var probabilityElement = $('#probability');
  if (size.id == SIZE_AUDIBLE && scope.id != SCOPE_ME) {
    probabilityElement.html(getAudibleMeteorText(scope, size));
  } else {
    var probability_elements = getProbabilityNear(getScopeSizeProbability(scope, size), 2);
    if (probability_elements) {
      probabilityElement.html(getProbabilityComparisonText(scope, size, probability_elements));

      // add sources
      var sourceLinks = _.chain(probability_elements).filter(function(element) {
        return _.has(element, 'source') && element.source != '';
      }).map(function(element, i) {
        return '<a href="' + element.source + '"" target="_blank">' + (i + 1) + '</a>';
      }).join(',').value();
      probabilityElement.append('<sup>' + sourceLinks + '</sup>');
    } else {
      probabilityElement.html('Whoops! We can\'t find something similar.');
    }
  }

  /* show images */

  // compute width per image
  var probabilityImageCount = (probability_elements ? probability_elements.length : 0);
  var imageWidth = ($('#probability-images').width() - 60) / (probabilityImageCount + 1);

  // function to show an image and set up the alt text, etc
  function showImage(imageElement, imageData) {
    imageElement.removeAttr('title');
    imageElement.attr('src', imageData.image).width(imageWidth);
    if (imageData.image_source) {
      imageElement.attr('title', 'Source: ' + imageData.image_source);
    }
    imageElement.show();
  }

  // function hide and reset the image
  function hideImage(imageElement) {
    imageElement.removeAttr('title');
    imageElement.hide();
  }

  // display the cross product image
  showImage($('#crossproduct-image'), crossProduct);

  // show the first probability image if necessary
  if (probabilityImageCount > 0) {
    showImage($('#probability-image-0'), probability_elements[0]);
    $('#congruent').show();
  } else {
    hideImage($('#probability-image-0'));
    $('#congruent').hide();
  }

  // show the second probability image if necessary
  if (probabilityImageCount > 1) {
    showImage($('#probability-image-1'), probability_elements[1]);
    $('#plus').show();
  } else {
    hideImage($('#probability-image-1'));
    $('#plus').hide();
  }

  /* show "what if?" text (crossproduct) */

  $('#outcome').html(crossProduct.text || 'Well, I guess we don\'t know!');

  // add sources
  var sourceLinks = _.chain(crossProduct.text_sources).filter().map(function(source, i) {
    return '<a href="' + source + '"" target="_blank">' + (i + 1) + '</a>';
  }).join(',').value();
  $('#outcome').append('<sup>' + sourceLinks + '</sup>');

  /* show a description */

  $('#event-title').html(size.event_title);
  $('#event-description').html(size.text);

  // add sources to description
  var sourceLinks = _.chain(size.text_sources).filter().map(function(source, i) {
    return '<a href="' + source + '"" target="_blank">' + (i + 1) + '</a>';
  }).join(',').value();
  $('#event-description').append('<sup>' + sourceLinks + '</sup>');
}

function getAudibleMeteorText(scope, size) {
  var number_per_year = Math.round(getScopeSizeProbability(scope, size));
  var text = 'About ' + number_per_year.toLocaleString() +
             ' fireballs will be so powerful they can be heard from ' +
             scope.description + ' in the next year.';
  return text;
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

  _.each(probabilities, function(probability1, index1) {
    if (between(probability1.probability, low, high)) {
      similar.push([probability1]);
    }

    _.each(probabilities, function(probability2, index2) {
      if (index2 <= index1) return;
      if (probability1.category != "" && probability1.category == probability2.category) return;

      var combined_prob = probability1.probability * probability2.probability;
      if (between(combined_prob, low, high)) {
        similar.push([probability1, probability2]);
      }
    });
  });

  return _.sample(similar, 1)[0];
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

