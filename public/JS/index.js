$(document).ready(function (){

  //handling the burger submission
  $("#submitburger").click(function (){
    event.preventDefault();

    var newBurger = {
      name: $("#addburger").val().trim()
    }
    alert(newBurger.name)
    //post request to insert burger
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function(){
      console.error("a new burger has been added")
      location.reload();
    })
  })

  $(".eatme").click(function(){
    event.preventDefault();
    var id= $(this).data("id")
    var devouredDb = $(this).data("devoured")

    var devouredState = {
      devoured: devouredDb
    }
    $.ajax(`api/burgers/${id}`, {
      type: "PUT",
      data: devouredState
    }).then(function(){
      console.log("yeah... you ate that didn't you?")
      location.reload()
    })
  })
})