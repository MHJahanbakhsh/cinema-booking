var numOfUnuccupiedSeats=document.querySelectorAll(".row .seat:not(.occupied)").length

var moviePrice=document.getElementById("movie").value //this is still a string
moviePrice=+moviePrice







for (let i = 0; i <numOfUnuccupiedSeats ;i++) {
let seats=document.querySelectorAll(".row .seat:not(.occupied)")[i]
seats.addEventListener('click',function(){
  this.classList.toggle('selected');

let numOfSelectedSeats=document.querySelectorAll('.row .selected').length;

document.getElementById("count").innerHTML=numOfSelectedSeats;

document.getElementById("total").innerHTML=moviePrice*numOfSelectedSeats;


document.getElementById("movie").addEventListener("change",function(){
  moviePrice=parseInt(this.value)
  document.getElementById("total").innerHTML=moviePrice*numOfSelectedSeats;


})
//add to local-S
addToLocal()
});
}

// console.log(document.querySelectorAll(".row .seat:not(.occupied)"));

// console.log(typeof document.querySelectorAll(".row .seat:not(.occupied)"));



//configuring reset button
function reset(){
document.querySelector('#btn').addEventListener('click',function(){
  document.querySelectorAll('.row .selected').forEach(resetFunc);
  function resetFunc(item){item.classList.remove('selected')}
  clearLS();
});
}
//call it
  reset()
//-------------------------------------------------------------------

//add to local storage
function addToLocal(){
  //create list of all seats classes
  let SelectedSeats=document.querySelectorAll('.row .selected');
  let seats=document.querySelectorAll(".row .seat:not(.occupied)")
  let arraySelected = Array.from(SelectedSeats);
  let seatIndexes =arraySelected.map(function(item){
    return [...seats].indexOf(item)
  })
  localStorage.setItem('seatIndexes',JSON.stringify(seatIndexes))
}

//function to clear from local storage
function clearLS(){
localStorage.removeItem("seatIndexes")
}


//add from localstorage to ui
function getLSAndShowOnUI(){
let fetchedIndexes= JSON.parse(localStorage.getItem('seatIndexes'));
let seats=document.querySelectorAll(".row .seat:not(.occupied)")
for(let i =0; i<fetchedIndexes.length;i++){
  seats[fetchedIndexes[i]].className='seat selected'  
}
}


window.onload=getLSAndShowOnUI