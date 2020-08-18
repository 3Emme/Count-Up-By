//Business Logic
function handleInput (countTo,countBy) {
  if (!countTo || !countBy || countTo < 0 || countBy < 0 || isNaN(countBy) || isNaN(countTo) || parseInt(countBy) > parseInt(countTo)){ 
    alert (" Please make sure you are entering a valid number into both fields. Thanks!")
  } else{
    console.log("pass!")
    countUp(countTo,countBy);
  }
}

function countUp (countTo,countBy) {
  console.log(countTo,countBy)
  let countedArray = [0];
  for (let index = 0; index < countTo; index += parseInt(countBy)) {
    countedArray.push(countedArray[index] + parseInt(countBy));
  }
  countedArray;
  $("#result").append(countedArray);
}




//Interface Logic
window.onload = function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let countTo = $("#countTo").val();
    let countBy = $("#countBy").val();
    handleInput(countTo,countBy)
    console.log(countTo,countBy)
    $("#result").show();
  });  
};
