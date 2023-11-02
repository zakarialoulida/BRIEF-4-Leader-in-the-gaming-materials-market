//objects//

const shoplist=[
    pro1={name:"Mecanique Keyboard Spartan",price:"70$"},
    pro2={name:"Ancient souls",price:"45$"},
    pro3={name:"Mecanique Keyboard Razer",price:"70$"},
    pro4={name:"Gaming Chair Mach",price:"200$"},
    pro5={name:"Echo Headphones",price:"100$"},
    pro6={name:"Wave Console",price:"30$"},
    pro7={name:"Wireless Gaming Mouse",price:"65$"},
    pro8={name:"Gaming Setup",price:"1050$"},
    pro9={name:"Razer Headphones",price:"70$"},
    pro10={name:"Mach Gaming chair",price:"200$"},
    pro11={name:"TUFF Gaming Monitor 120Hz",price:"300$"},
    pro12={name:"Nvidia Gtx1080ti",price:"400$"},
    pro13={name:"Semi-mecanique Keyboard Zoei",price:"80$"},
    pro14={name:"Playstation 5",price:"900$"},
    pro15={name:"Kingdom come: Delivarnce",price:"12$"},
    pro16={name:"Full Gaming Setup",price:"1500$"},
    pro17={name:"Mecanique Keyboard",price:"90$"},
    pro18={name:"Amd RX 6800",price:"450$"},
] 

const pro1btn= document.getElementById('pro1btn');
const pro2btn= document.getElementById('pro2btn');
const pro3btn= document.getElementById('pro3btn');
const pro4btn= document.getElementById('pro4btn');
const pro5btn= document.getElementById('pro5btn');
const pro6btn= document.getElementById('pro6btn');
const pro7btn= document.getElementById('pro7btn');
const pro8btn= document.getElementById('pro8btn');
const pro9btn= document.getElementById('pro9btn');
const pro10btn= document.getElementById('pro10btn');
const pro11btn= document.getElementById('pro11btn');
const pro12btn= document.getElementById('pro12btn');
const pro13btn= document.getElementById('pro13btn');
const pro14btn= document.getElementById('pro14btn');
const pro15btn= document.getElementById('pro15btn');
const pro16btn= document.getElementById('pro16btn');
const pro17btn= document.getElementById('pro17btn');
const pro18btn= document.getElementById('pro18btn');




























/********************************************* */
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
// products classes
const Accessories = document.querySelectorAll(".Accessories");
const videogames = document.querySelectorAll(".Video_Games");
const Consoles = document.querySelectorAll(".console");
const fullsetup = document.querySelectorAll(".fullsetup");
//filter buttons id
const videogame1 = document.getElementById('Video_Games');
const Accessoriesbutton=document.getElementById('Accessoriesbutton');
const Consolesbutton=document.getElementById('Consoles');
const full_setup=document.getElementById('full_setup');
const filterall=document.getElementById('filterall');

const addbuttons = document.querySelectorAll(".addbutton");

var productsbought=0;

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
    for (let i = 0; i < addbuttons.length; i++) {
        addbuttons[i].addEventListener("click", (e) => {
            panierlist.style.display = 'block';
            productsbought= productsbought+1;
        });
        
    }
   
    Accessoriesbutton.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "block";
        }
    });
    
    Consolesbutton.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Consoles.length; i++) {
            Consoles[i].style.display = "block";
        }
    });
    
    full_setup.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < fullsetup.length; i++) {
            fullsetup[i].style.display = "block";
        }
    });
    
    videogame1.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < videogames.length; i++) {
            videogames[i].style.display = "block";
        }
    });
    
    filterall.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "block";
        }
    
        for (let i = 0; i < videogames.length; i++) {
            videogames[i].style.display = "block";
        }
    
        for (let i = 0; i < Consoles.length; i++) {
            Consoles[i].style.display = "block";
        }
    
        for (let i = 0; i < fullsetup.length; i++) {
            fullsetup[i].style.display = "block";
        }
    });
    
    function resetFilters() {
        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "none";
        }
    
        for (let i = 0; i < videogames.length; i++) {
            videogames[i].style.display = "none";
        }
    
        for (let i = 0; i < Consoles.length; i++) {
            Consoles[i].style.display = "none";
        }
    
        for (let i = 0; i < fullsetup.length; i++) {
            fullsetup[i].style.display = "none";
        }
    }
    
    console.log(productsbought);

    pro1btn.addEventListener("click", e => {
        localStorage.setItem("pro1", JSON.stringify(pro1));
        console.log(localStorage.getItem("pro1")); 
        // console.log("hello");
    });
});

