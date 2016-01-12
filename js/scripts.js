$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("input#name").val();
    $(".name").text(name);
    $("#letter").show();
    event.preventDefault();
  });
});
