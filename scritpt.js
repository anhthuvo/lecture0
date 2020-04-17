document.addEventListener("DOMContentLoaded", function(){

//$("#menu-icon").blur(func()) equal to document.querySelector("#menu-icon").addEventListener("blur",func);
document.querySelector("#menu-icon").addEventListener("blur",function(){
   document.getElementById("navbarNavDropdown").classList.toggle("show");
});

function Ajax(clickedObject,file,updatedElement){
   var allClickedObject = document.getElementsByClassName(clickedObject);
   console.log(allClickedObject);
   for (i = 0; i < allClickedObject.length; i++) {
      allClickedObject[i].addEventListener("click", update_content);
   };
   function update_content() {
      if (window.XMLHttpRequest){
         var xhr = new XMLHttpRequest;
         console.log(xhr);
      }
      else if (window.ActiveXObject) {
         var xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } 
      else{
         alert("Ajax is not supported");
      }
      xhr.open('GET',file,true);
      xhr.onload = function (){
         if (this.status == 200 && this.readyState == 4){
            document.querySelector(updatedElement).innerHTML = this.responseText;
         }
      }
      xhr.send();
   };
 };
 
 Ajax("menu-snippet",'menu-snippet.txt',".main-container");
 Ajax("home-snippet","home-snippet.txt",".main-container");

});
