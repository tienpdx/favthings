$(document).ready(function() {
  $("form#favthings").submit(function(event) {
    event.preventDefault();


    // var firstF = $("input#thing1").val();
    // var secondFav = $("input#thing2").val();
    // var thirdFav = $("input#thing3").val();
    // var fourthFav = $("input#thing4").val();

    var blanks = ["first", "second", "third", "fourth"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    // $("." + order[
    // $("#second").text(favorites[1]);
    // $("#third").text(favorites[2]);
    // $("#fourth").text(favorites[3]);










  });


});
