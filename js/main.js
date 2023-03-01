var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let estado= 0;
function activarTodo(){
  estado+=1;
 
    for (i = 0; i < coll.length; i++) {
        
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if(estado%2==1){
            content.style.display = "none";
          }
          else{
            content.style.display = "block";
          }
    }
}

let buttonGeneral = document.getElementById("buttonActive");


buttonGeneral.addEventListener("click",function(){activarTodo()});