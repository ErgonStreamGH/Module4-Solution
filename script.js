// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

// See Lecture 50, part 1

(function () {

    
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  let arraySize = names.Lenght;
 
for (var i = 0; i < names.length; i++) {
  var firstLetter = names [i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  }
  else {
    helloSpeaker.speak(names[i]); 
  }
}

})();
