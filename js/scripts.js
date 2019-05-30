$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();
    var addressInput = $("input#address").val();

    $(".person").text(personInput);
    $(".address").text(addressInput);

    $("#receipt").show();

     event.preventDefault();
  });
});
