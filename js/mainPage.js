
  var totalMoney = 0;
function createLocationButtons(locations) {  
    var audio = new Audio('money.mp3');
audio.play();
    index=0
while(index + 1<=localStorage.length ){ //iterate through storagelist Index
    array = JSON.parse(localStorage.getItem(localStorage.key(index)))
    total = array[array.length -1]
    totalMoney = totalMoney + total;
    index++
}
    
    
    var listHTML2 = document.createElement("li")
    array = JSON.parse(localStorage.getItem(localStorage.key(0)))
    total = array[array.length -1]
    listHTML2.innerHTML += '   <li id= currentLocation class="mdl-list__item mdl-list__item--two-line"><span class="mdl-list__item-primary-content"><img class="mdl-list__item-icon" id="icon0" src="images/loading.png"> <span>Total Money $' + totalMoney + '</span> <span id="weatherCurrent" class="mdl-list__item-sub-title">Dam nigga!</span> </span></li>';
    document.getElementById('locationList').appendChild(listHTML2); //Appends location lists to include listHTML (our new list element). 
    //Before loading the rest of the buttons we need to know whats in our local storage. So we call loadLocations. This function will determine whats in localStorage and then load the relevant list elements on the index page.           
i=0
while(i + 1<=localStorage.length ){ //iterate through storagelist Index

        
    array = JSON.parse(localStorage.getItem(localStorage.key(i)))
    total = array[array.length -1]
    console.log(localStorage.key)
        var listHTML = document.createElement("li") //create a list element.
        //creates list element with with index 'i' and summary, which is set to 'loading...'.
        listHTML.innerHTML += '   <li id =' + i + ' ' + 'class="mdl-list__item mdl-list__item--two-line" onclick="viewLocation(this.id, localStorage.key(this.id));"><span class="mdl-list__item-primary-content"><img class="mdl-list__item-icon" id="icon0" src="images/loading.png"> <span>' + localStorage.key(i) + '</span> <span id="weather0" class="mdl-list__item-sub-title">This is your total: $' + total + ' ' + array.length -2 + ' deliveries'+ '</span> </span></li>';
        document.getElementById('locationList').appendChild(listHTML); //append the list to add this element.

            i++                    
        }
    

} 
function viewLocation(clicked_id){
    localStorage.setItem("id", clicked_id)
    location.href = 'viewlocation.html';
  //  var x;
  //  if (confirm("Would you like to remove this item?" + localStorage.getItem(localStorage.key(clicked_id))) == true) {
 //       localStorage.removeItem(localStorage.key(clicked_id))
  //      location.reload();
 //   } else {
  //      
 //   }
   
}