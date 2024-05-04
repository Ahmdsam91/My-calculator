document.querySelector(".plus").onclick = function(){
    document.querySelector(".input-enter").value += "+"; 
}
document.querySelector(".minus").onclick = function(){
    document.querySelector(".input-enter").value += "-";
}
document.querySelector(".nine").onclick = function(){
    document.querySelector(".input-enter").value += "9";
}
document.querySelector(".eight").onclick = function(){
    document.querySelector(".input-enter").value += "8";
}        
document.querySelector(".seven").onclick = function(){
    document.querySelector(".input-enter").value += "7";
}     
document.querySelector(".six").onclick = function(){
    document.querySelector(".input-enter").value += "6"; 
}        
document.querySelector(".five").onclick = function(){
    document.querySelector(".input-enter").value += "5";
}       
document.querySelector(".four").onclick = function(){
    document.querySelector(".input-enter").value += "4";
}        
document.querySelector(".three").onclick = function(){
    document.querySelector(".input-enter").value += "3";
}      
document.querySelector(".two").onclick = function(){
    document.querySelector(".input-enter").value += "2";
}        
document.querySelector(".one").onclick = function(){
    document.querySelector(".input-enter").value += "1";
}       
document.querySelector(".zero").onclick = function(){
    document.querySelector(".input-enter").value += "0";
}       
document.querySelector(".zeroo").onclick = function(){
    document.querySelector(".input-enter").value += "00"; 
}        
document.querySelector(".slash").onclick = function(){
    document.querySelector(".input-enter").value += "/"; 
}        
document.querySelector(".dot").onclick = function(){
    document.querySelector(".input-enter").value += ".";
}
document.querySelector(".pro").onclick = function(){
    document.querySelector(".input-enter").value += "*";
}
document.querySelector(".ac").onclick = function(){
    document.querySelector(".input-enter").value = "";
}
document.querySelector(".equal").onclick = function(){
    if(document.querySelector(".input-enter").value == ""){
        document.querySelector(".input-enter").value = "0";
    }
    else{
        document.querySelector(".input-enter").value = eval(document.querySelector(".input-enter").value);
    }
    
}
document.querySelector(".de").onclick = function(){
    document.querySelector(".input-enter").value = document.querySelector(".input-enter").value.toString().slice(0,-1);
}