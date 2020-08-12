$(document).ready(function(){
  $(#formOne).submit(function(event)){
    

    $("#person1").append(person1Input);
    $("#item1").append(Item1Input);
    $("kitchen_appliance").append(kitchen_applianceInput);

    $("#story").Show();

    event.preventDefault();
  });
});