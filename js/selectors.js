// declare your functions here...
function paragraphSelector(){
  return $('p')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics')
}

function lastImageSelector() {
  let last = $('#pic-list li')
  return $('#pic-list li')[last.length - 1]
}

function firstListItem() {
  return $('#pic-list li:first-child')
}
