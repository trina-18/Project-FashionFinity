   var mySubmit= document.getElementById("submit");

    mySubmit.addEventListener("click", function(){
     mySubmit.style.backgroundColor= "blue";
     mySubmit.style.color="white";
     alert ("Your comment has been submitted!")
    });

    var textArea= document.getElementById("cmmntArea");
    textArea.addEventListener("focus", function(){
      textArea.style.backgroundColor="black";
      textArea.style.color="aliceblue";
    }); 