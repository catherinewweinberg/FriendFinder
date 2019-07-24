$(".submit").on("click", function(event) {
  event.preventDefault();
  console.log("click");
  // This will grab the form elements:
  var newFriend = {
    name: $("#name")
      .val()
      .trim(),
    photo: $("#photo")
      .val()
      .trim(),
    surveyQuestions: [
      $("#question1").val(),
      $("#question2").val(),
      $("#question3").val(),
      $("#question4").val(),
      $("#question5").val(),
      $("#question6").val(),
      $("#question7").val(),
      $("#question8").val(),
      $("#question9").val(),
      $("#question10").val()
    ]
  };
  console.log("newFriend: ", newFriend);

  //   This should clear the form after its been submitted
  $("#name").val(""),
    $("#photo").val(""),
    $("#question1").val(""),
    $("#question2").val(""),
    $("#question3").val(""),
    $("#question4").val(""),
    $("#question5").val(""),
    $("#question6").val(""),
    $("#question7").val(""),
    $("#question8").val(""),
    $("#question9").val(""),
    $("#question10").val("");
  console.log(newFriend);

  $.post("/api/friends", newFriend).then(function(data) {
    console.log("survey.html", data);
    alert("Adding new friend!");
  });
});
