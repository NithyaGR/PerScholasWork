/* This is to check the number of vowels
in the given String */

function vowelCount(stringInput){

  if (stringInput.length >10) {
    return "Input a String which is less than 10 characters Please";

  } else {

    var char = stringInput.split("");
    var count=0;
    for (i=0; i<stringInput.length; i++){
        if (char[i] === 'a' || char[i] === 'e' || char[i] === 'i' || char[i] === 'o' || char[i] === 'u')
          count++;

    }
    return count++
  }
}
//Calling from main
console.log(vowelCount("Nithya"));
