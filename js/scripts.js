$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();
    var dob = $("#born").val();
    var food = $("#food").val();
    var music = $("input:radio[name=genre]:checked").val();
    var favoriteColor = $("input#color").val();

    $(".person").text(personInput);
    $(".born").text(dob);
    $(".food").text(food);
    $(".genre").text(music);
    $(".color").text(favoriteColor);
    $("#survey").show();
    event.preventDefault();

  });
});
