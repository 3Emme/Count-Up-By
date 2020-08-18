//Business Logic
function handleInput (countTo,countBy) {
  if (!countTo || !countBy || countTo < 0 || countBy < 0 || isNaN(countBy) || isNaN(countTo) || countBy > countTo){
    alert (" Please make sure you are entering a valid number into both fields. Thanks!")
  } else{

  }
}




//Interface Logic
window.onload = function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let countTo = $("#countTo").val();
    let countBy = $("#countBy").val();
    handleInput(countTo,countBy)
    console.log(countTo,countBy)
  });  
};
