$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();
    var food = $("#food").val();
    var music = $("input:radio[name=genre]:checked").val();
    var favoriteColor = $("input#color").val();

    $(".person").text(personInput);
    $(".food").text(food);
    $(".genre").text(music);
    $(".color").text(favoriteColor);
    $("#survey").show();
    event.preventDefault();

  });
});
