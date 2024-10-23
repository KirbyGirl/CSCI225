function myFunction2() {
    var x = document.getElementById("click2");
    if (x.style.visibility === "hidden") {
     x.style.visibility="visible";
     x.style.display = "inline-block";
     x.style.backgroundImage = "radial-gradient(black, midnightblue, rgb(81, 2, 113))";
     x.style.border = "2px ridge white";
     x.style.width = "780px";
     x.style.height = "50vh";
     x.style.zIndex="1";
     x.style.overflow="scroll";
     x.style.opacity = "1";
     x.style.left="20px";
     x.style.position="absolute";
     x.style.top="20%";
     x.style.borderRadius="10px";
     x.style.color="aliceblue";
     } else {
      x.style.visibility = "hidden";
     }
    }
    
    function myFunction() {
        var x = document.getElementById("click");
        if (x.style.visibility === "hidden") {
         x.style.visibility="visible";
         x.style.display = "inline-block";
         x.style.backgroundImage = "radial-gradient(black, midnightblue, rgb(81, 2, 113))";
         x.style.border = "2px ridge white";
         x.style.width = "570px";
         x.style.height = "33vh";
         x.style.overflow="scroll";
         x.style.opacity = "1";
         x.style.position="absolute";
         x.style.top="20%";
         x.style.left="30%";
         x.style.borderRadius="10px";
         x.style.color="aliceblue";
         x.style.textShadow="0 0 3px midnightblue";
         } else {
          x.style.visibility = "hidden";
         }
        }