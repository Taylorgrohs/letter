$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("input#name").val().toUpperCase();
    $(".name").text(name);
    $("#letter").show();
    $("#letter").css("text-transform", "uppercase");
    event.preventDefault();
  });
});
