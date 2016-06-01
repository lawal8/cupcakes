// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.
var id;
function info(){
id = Number(localStorage.getItem("id")); 
    array = JSON.parse(localStorage.getItem(localStorage.key(id)))
    console.log(array.length)
console.log(JSON.parse(localStorage.getItem(localStorage.key(id))))
document.getElementById("textArea").value = localStorage.key(id) + "\n"
i=0;
while (i + 1 < array.length){
    
document.getElementById("textArea").value += "$" + array[i] + "\n";
i++
}
  localStorage.removeItem("id")  
}





function removeMe(){
    localStorage.removeItem(localStorage.key(localStorage.getItem("id")))
}