var hambur = document.querySelector("#hamburger");
var menu = document.querySelector("mobileheader");
var headerulmain = document.querySelector(".headerulmain")
hambur.addEventListener(
    "click",
    function(){
       
        var itag =hambur.children[0];

var headerulmain = document.querySelector(".headerulmain")
if(itag.classList.contains("fa-bars")){
    // headerulmain.style.transition=  "1s";
    headerulmain.style.display=  "flex";
//    headerulmain.style.transition=  "1s";

   headerulmain.style.left=  "0px"; 
   
}
else{
    headerulmain.style.display=  " ";
     //jo phelese h voh;
     headerulmain.style.left=  "-250px"; 

}
// headerulmain.classList.toggle("showheader");
itag.classList.toggle("fa-bars");
itag.classList.toggle("fa-times");
    
    }
)

var pizza = document.querySelector("#pizza");
var breads = document.querySelector("#breads");
var burger = document.querySelector("#burger");
var chicken = document.querySelector("#chicken");
var menudiv = document.querySelector(".menudiv");
 pizza.addEventListener(
    "click",
    function(){
menudiv.style.display ="flex";
menudiv.style.transform = "scale(1,1)";
    }
 )
 chicken.addEventListener(
    "click",
    function(){
menudiv.style.display ="flex";
menudiv.style.transform = "scale(1,1)";
    }
 )
 breads.addEventListener(
    "click",
    function(){
menudiv.style.display ="flex";
menudiv.style.transform = "scale(1,1)";
    }
 )
 burger.addEventListener(
    "click",
    function(){
menudiv.style.display ="flex";
menudiv.style.transform = "scale(1,1)";
    }
 )
 $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  var ram = document.querySelector(".ramram");
  var countrymain = document.querySelector("#countrymain");
//   function showul(){
// countrymain.style.display= "flex";
// countrymain.style.transform ="scale(1)";

//   }
ram.addEventListener(
    "click",
    function(){
       countrymain.classList.toggle("countrymain2")
    }
)
      