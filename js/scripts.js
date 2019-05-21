//  *** Business logic (Back-end) ***
var numbersList = [];
var displayList = [];

//  Generate a list:  1 to user numbers.
function countToNumber(userNumbers){
  for(var i = 1; i <= userNumbers; i++){
    numbersList.push(i);
  }
}

// Replace collected numbers with names and outputs as a list.
function buildDisplayList(numbersList) {
  for(var j = 1; j <= numbersList.length; j++){
    if ( ((j % 3) !== 0) && ((j % 5) !== 0)){
      displayList.push("<li class='displayNumber'>" + j + "</li>");
    } else if (j % 3 === 0){
      displayList.push("<li class='ding-red'>" + "ding" + "</li>");
    } else if (j % 5 === 0){
      displayList.push("<li class='dong-yellow'>" + "dong" + "</li>");
    } else if (j % 15 === 0) {
      displayList.push("<li class='dingdong-green'>" + "dingdong" + "</li>");
    }
  }
}

//  *** User Interface logic (Front-end) ***
$(document).ready(function(){
  $('form#number').submit(function(event){
    event.preventDefault();
    var userNumbers = parseInt($('input#userNumbers').val());
    countToNumber(userNumbers);
    buildDisplayList(numbersList);
    $('#displayList').append(displayList);
    $('.table').show();
  });
  $('#reset').click(function(){
    $('#number').text();
    $('#displayList').empty();
    $('.table').hide();
    numbersList = [];
    displayList = [];
  });
});
