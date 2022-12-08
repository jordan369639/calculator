let keyvalue = document.querySelectorAll(".key");
let themenumber =Array.from(document.getElementsByClassName("tno"))
let rootvariable = document.querySelector(":root");
let toggle = document.getElementsByClassName("themeno")[0];



themenumber.forEach(elem =>{
    elem.addEventListener("click",(e)=>{

  let themeidx = e.target.innerHTML;
 


  changetheme(themeidx);

    })
})
let currtheme = 1;



function changetheme(idx ){

    if(idx ==1){
      
        rootvariable.style.setProperty('--bcolor', "hsl(222, 26%, 31%)");
        rootvariable.style.setProperty('--keypadbackground', "hsl(0, 0%, 100%)");
        rootvariable.style.setProperty('--screen', "hsl(224, 36%, 15%)");
        rootvariable.style.setProperty('--fontcolor', "white");
        rootvariable.style.setProperty('--themetoggle', "rgb(245, 101, 11)");
        rootvariable.style.setProperty('--keypadshadow', " hsla(28,16%,65%,1)");
        rootvariable.style.setProperty('--numpad', " #232c43");
        rootvariable.style.setProperty('--resetbackground', "hsl(225, 21%, 49%)");
        rootvariable.style.setProperty('--resetshadow', " hsl(224, 28%, 35%)");
        rootvariable.style.setProperty('--equalbackground', "hsl(6, 63%, 50%)");
        rootvariable.style.setProperty('--equalshadow', "hsl(6, 70%, 34%)");
        rootvariable.style.setProperty('--deletebackground', "hsl(225, 21%, 49%)");
        rootvariable.style.setProperty('--deleteshadow', "hsl(224, 28%, 35%)");
        rootvariable.style.setProperty('--keycolor', "#232c43");
        rootvariable.style.setProperty('--textcolor', "white");
        rootvariable.style.setProperty('--hovercolor', "hsl(0, 0%, 100%)");
        toggle.style.left = "0.3rem";


    }else if(idx == 2){


        rootvariable.style.setProperty('--bcolor', " hsl(0, 0%, 90%)");
        rootvariable.style.setProperty('--keypadbackground', "hsl(45, 7%, 89%)");
        rootvariable.style.setProperty('--keycolor', "hsl(60, 10%, 19%)");
        rootvariable.style.setProperty('--textcolor', "hsl(60, 10%, 19%)");
        rootvariable.style.setProperty('--screen', "hsl(0, 0%, 93%)");
        rootvariable.style.setProperty('--fontcolor', "hsl(0, 0%, 100%)");
        rootvariable.style.setProperty('--themetoggle', "hsl(25, 98%, 40%)");
        rootvariable.style.setProperty('--keypadshadow', " hsl(35, 11%, 61%)");
        rootvariable.style.setProperty('--numpad', " hsl(0, 5%, 81%)");
        rootvariable.style.setProperty('--resetbackground', "hsl(185, 42%, 37%)");
        rootvariable.style.setProperty('--resetshadow', " hsl(185, 58%, 25%)");
        rootvariable.style.setProperty('--equalbackground', " hsl(25, 98%, 40%)");
        rootvariable.style.setProperty('--equalshadow', "hsl(25, 99%, 27%)");
        rootvariable.style.setProperty('--deletebackground', "hsl(185, 42%, 37%)");
        rootvariable.style.setProperty('--deleteshadow', "hsl(185, 58%, 25%)");
        rootvariable.style.setProperty('--hovercolor', "hsl(0, 0%, 100%)");
        toggle.style.left = "1.5rem";

      



    }else if(idx ==3 ){
        rootvariable.style.setProperty('--bcolor', "hsl(268, 75%, 9%)");
        rootvariable.style.setProperty('--keypadbackground', "hsl(268, 47%, 21%)");
        rootvariable.style.setProperty('--screen', " hsl(268, 71%, 12%)");
        rootvariable.style.setProperty('--fontcolor', "white");
        rootvariable.style.setProperty('--themetoggle', "hsl(176, 100%, 44%)");
        rootvariable.style.setProperty('--keypadshadow', " hsl(290, 70%, 36%)");
        rootvariable.style.setProperty('--numpad', " hsl(268, 71%, 12%)");
        rootvariable.style.setProperty('--resetbackground', " hsl(281, 89%, 26%)");
        rootvariable.style.setProperty('--resetshadow', " hsl(285, 91%, 52%)");
        rootvariable.style.setProperty('--equalbackground', "hsl(176, 100%, 44%)");
        rootvariable.style.setProperty('--equalshadow', "hsl(177, 92%, 70%)");
        rootvariable.style.setProperty('--deletebackground', " hsl(281, 89%, 26%)");
        rootvariable.style.setProperty('--deleteshadow', "hsl(285, 91%, 52%)");
        rootvariable.style.setProperty('--keycolor', "hsl(52, 100%, 62%)");
        rootvariable.style.setProperty('--textcolor', "hsl(0, 0%, 100%)");
        rootvariable.style.setProperty('--hovercolor', "hsl(281, 89%, 26%)");

        toggle.style.left = "2.5rem";

      
    }




}




keyvalue.forEach(elem =>{

elem.addEventListener('click',(e)=>{

let values = e.target.innerHTML;
getresult(values);


})


})
let result = "";
let value = "";
function getresult(input){

if(input == '='){
    if(result == false){
       
        document.getElementById("calcu").value = "";
     
    }else{
        document.getElementById("calcu").value = eval(result);
        result = (eval(result))
    }
   

}else if(input == "RESET"){
    result = "";
   document.getElementById("calcu").value = result;

}else if(input == "Del"){
  

    result = result+"";
    result = result.substring(0,result.length-1)
    document.getElementById("calcu").value = result;



}else{
    result += input;
   document.getElementById("calcu").value = result;

}



    



}