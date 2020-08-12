$(document).ready(function(){
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const item1Input = $("input#item1").val();
    const kitchen_applianceInput = $("input#kitchen_appliance").val();

    $(".person1").append(person1Input);
    $(".item1").append(item1Input);
    $(".kitchen_appliance").append(kitchen_applianceInput);

    $("#story").show();

    event.preventDefault();
  });
});