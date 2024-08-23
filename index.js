var list = document.getElementById("list");
var typing = document.getElementById("typing");

function sendMessage(){
   console.log(event.keyCode);
   if(event.keyCode === 13){
      var elem = event.target;
      list.innerHTML += "<li class='right-side right'>" + elem.value + "</li>";
      typing.style.display = "block";
      if(["hi", "hello", "oye" , "moye"].indexOf(elem.value.toLowerCase()) !== -1){
         setTimeout(function(){
            list.innerHTML += "<li class='left-side left'> Hello </li>"
         }, 2000)
         setTimeout(function(){
            list.innerHTML += "<li class='left-side left'> How are you? </li>"
            typing.style.display = "none";
         }, 4000)
         
      }else if(["theek", "Alhamdulillah",  "thk", "set" , "mast"].indexOf(elem.value.toLowerCase()) !== -1){
         setTimeout(function(){
            list.innerHTML += "<li class='left-side'> How can I help you? </li>";
            typing.style.display = "none";
         }, 2000)
         
      }else{
         setTimeout(function(){
            list.innerHTML += "<li class='left-side'> Mai samjh nhi saka apko </li>";
            typing.style.display = "none";
         }, 2000)
         
      }
      elem.value = "";

   }
}