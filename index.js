
function introduction(name) {
    return`Hi, my name is ${name}!`;
  }
  introduction("Stephanie");

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning ${language}.`);
  }
  
  introductionWithLanguage("Stephanie","Javascript");

  function introductionWithLanguageOptional(name, language = "Javascript") {
    console.log(`Hi, my name is ${name} and I am learning ${language}.`);
}
 introductionWithLanguageOptional("stephanie");