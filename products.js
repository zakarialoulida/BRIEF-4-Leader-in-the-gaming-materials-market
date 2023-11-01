
document.getElementById("firstpage1").hidden= false;
document.getElementById("firstpage2").hidden= false;
document.getElementById("firstpage3").hidden= true;
document.getElementById("firstpage4").hidden= true;
document.getElementById("firstpage5").hidden= true;
document.getElementById("firstpage6").hidden= true;
document.getElementById("firstpage7").hidden= true;


document.addEventListener("DOMContentLoaded", function() {
const button1= document.getElementById('button1');
const button2= document.getElementById('button2');
const button3= document.getElementById('button3');
const button4= document.getElementById('button4');
const panier=document.getElementById('panier');
const panier2=document.getElementById('panier2');
const panierlist=document.getElementById('panierlist');
const Accessories = document.getElementsByClassName('Accessories');
const Accessoriesbutton=document.getElementsByClassName('Accessoriesbutton');
button1.addEventListener("click" , e=>{
    document.getElementById("firstpage1").hidden= false;
    document.getElementById("firstpage2").hidden= false;
    document.getElementById("firstpage3").hidden= true;
    document.getElementById("firstpage4").hidden= true;
    document.getElementById("firstpage5").hidden= true;
    document.getElementById("firstpage6").hidden= true;
    document.getElementById("firstpage7").hidden= true;

})

button2.addEventListener("click" , e=>{
    document.getElementById("firstpage1").hidden= true;
    document.getElementById("firstpage2").hidden= true;
    document.getElementById("firstpage3").hidden= false;
    document.getElementById("firstpage4").hidden= false;
    document.getElementById("firstpage5").hidden= true;
    document.getElementById("firstpage6").hidden= true;
    document.getElementById("firstpage7").hidden= true;

})
button3.addEventListener("click" , e=>{
    document.getElementById("firstpage1").hidden= true;
    document.getElementById("firstpage2").hidden= true;
    document.getElementById("firstpage3").hidden= true;
    document.getElementById("firstpage4").hidden= true;
    document.getElementById("firstpage5").hidden= false;
    document.getElementById("firstpage6").hidden= false;
    document.getElementById("firstpage7").hidden= true;
})
button4.addEventListener("click" , e=>{
    document.getElementById("firstpage1").hidden= true;
    document.getElementById("firstpage2").hidden= true;
    document.getElementById("firstpage3").hidden= true;
    document.getElementById("firstpage4").hidden= true;
    document.getElementById("firstpage5").hidden= true;
    document.getElementById("firstpage6").hidden= true;
    document.getElementById("firstpage7").hidden= false;
})
let x = false;
panier.addEventListener("click", e=>{
if(x===false){
panierlist.style.display='block';
x=true;
}else{
    panierlist.style.display='none';
    x=false;
}

})
panier2.addEventListener("click", e=>{
    if(x===false){
    panierlist.style.display='block';
    x=true;
    }else{
        panierlist.style.display='none';
        x=false;
    }
    })
    Accessoriesbutton.addEventListener("click", e=>{
        for(let i =0; i<Accessories.length;i++){Accessories[i].style.display="none";}
        
    })
});

