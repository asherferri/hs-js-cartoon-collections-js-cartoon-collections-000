function dwarfRollCall(dwarves) {
  for (var i=0; i < dwarves.length; i++)  {
    return (i+1) + '. ' + dwarves[i] + ' ' + (i+2) + '. ' + dwarves[i+1] + ' ' + (i+3) +'. ' + dwarves[i+2] +' ';
  }
}

function summonCaptainPlanet(planeteerCalls){
<<<<<<< HEAD
  var natureElement = [];
    for(var i=0; i < planeteerCalls.length; i++)  {
      natureElement.push(planeteerCalls[i].toUpperCase() + '!');
    }
    return natureElement;
=======
  var element = [];
    for(var i=0; i < planeteerCalls.length; i++)  {
      element.push(planeteerCalls[i].toUpperCase() + '!');
    }
    return element;
>>>>>>> 7bb35d099a22433cf705bbd010231cd2aa78d10c
}

function longPlaneteerCalls(words) {
  for(var i=0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  for(var i=0; i < foods.length; i++) {
    if(foods[i] === 'cheddar')  {
      return foods[i];
    }
  }
    if(foods !== 'cheddar') {
      return 'no cheese!';
    }
}
