//objects//

const shoplist = [
    pro1 = { name: "Mecanique Keyboard Spartan", price: "70$", Image: "brief4Assets/keyboard1.png" },
    pro2 = { name: "Ancient souls", price: "45$", Image: "brief4Assets/ancientsouls.png" },
    pro3 = { name: "Mecanique Keyboard Razer", price: "70$", Image: "brief4Assets/keyboard2.png" },
    pro4 = { name: "Gaming Chair Mach", price: "200$", Image: "brief4Assets/gamingchair.png" },
    pro5 = { name: "Echo Headphones", price: "100$", Image: "brief4Assets/headphones1.jpg" },
    pro6 = { name: "Wa ve Console", price: "30$", Image: "brief4Assets/console.png" },
    pro7 = { name: "Wireless Gaming Mouse", price: "65$", Image: "brief4Assets/mouse.png" },
    pro8 = { name: "Gaming Setup", price: "1050$", Image: "brief4Assets/full setup.png" },
    pro9 = { name: "Razer Headphones", price: "70$", Image: "brief4Assets/headphones2.png" },
    pro10 = { name: "Mach Gaming chair", price: "200$", Image: "brief4Assets/gamingchair2.jpg" },
    pro11 = { name: "TUFF Gaming Monitor 120Hz", price: "300$", Image: "brief4Assets/monitor2.jpg" },
    pro12 = { name: "Nvidia Gtx1080ti", price: "400$", Image: "brief4Assets/graphiccard 1.png" },
    pro13 = { name: "Semi-mecanique Keyboard Zoei", price: "80$", Image: "brief4Assets/keyboard5 1.png" },
    pro14 = { name: "Playstation 5", price: "900$", Image: "brief4Assets/console 3.png" },
    pro15 = { name: "Kingdom come: Delivarnce", price: "12$", Image: "brief4Assets/videogame3 1.png" },
    pro16 = { name: "Full Gaming Setup", price: "1500$", Image: "brief4Assets/setup2 1.png" },
    pro17 = { name: "Mecanique Keyboard", price: "90$", Image: "brief4Assets/keyboard4 1.png" },
    pro18 = { name: "Amd RX 6800", price: "450$", Image: "brief4Assets/amd 1.png" },
]
const probtn = [
    pro1btn = document.getElementById('pro1btn'),
    pro2btn = document.getElementById('pro2btn'),
    pro3btn = document.getElementById('pro3btn'),
    pro4btn = document.getElementById('pro4btn'),
    pro5btn = document.getElementById('pro5btn'),
    pro6btn = document.getElementById('pro6btn'),
    pro7btn = document.getElementById('pro7btn'),
    pro8btn = document.getElementById('pro8btn'),
    pro9btn = document.getElementById('pro9btn'),
    pro10btn = document.getElementById('pro10btn'),
    pro11btn = document.getElementById('pro11btn'),
    pro12btn = document.getElementById('pro12btn'),
    pro13btn = document.getElementById('pro13btn'),
    pro14btn = document.getElementById('pro14btn'),
    pro15btn = document.getElementById('pro15btn'),
    pro16btn = document.getElementById('pro16btn'),
    pro17btn = document.getElementById('pro17btn'),
    pro18btn = document.getElementById('pro18btn')
]





/********************************************* */
document.getElementById("firstpage1").hidden = false;
document.getElementById("firstpage2").hidden = false;
document.getElementById("firstpage3").hidden = true;
document.getElementById("firstpage4").hidden = true;
document.getElementById("firstpage5").hidden = true;
document.getElementById("firstpage6").hidden = true;
document.getElementById("firstpage7").hidden = true;


document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const panier = document.getElementById('panier');
    const panier2 = document.getElementById('panier2');
    const panierlist = document.getElementById('panierlist');
    // products classes
    const Accessories = document.querySelectorAll(".Accessories");
    const videogames = document.querySelectorAll(".Video_Games");
    const Consoles = document.querySelectorAll(".console");
    const fullsetup = document.querySelectorAll(".fullsetup");
    //filter buttons id
    const videogame1 = document.getElementById('Video_Games');
    const Accessoriesbutton = document.getElementById('Accessoriesbutton');
    const Consolesbutton = document.getElementById('Consoles');
    const full_setup = document.getElementById('full_setup');
    const filterall = document.getElementById('filterall');
    /************** */
    const addbuttons = document.querySelectorAll(".addbutton");
    /*** */
    /*panierbuttons*/
    const poductlist1 = document.getElementById('poductlist1');
    const productlist2 = document.getElementById('productlist2');
    const removebtn = document.getElementById('removebtn');
    const qtnadd = document.getElementById('qtnadd');
    const qtndec = document.getElementById('qtndec');
    const productname = document.getElementById('productname');
    const prdprice = document.getElementById('prdprice');
    const prdimage = document.getElementById('prdimage');
    var productsbought = 0;

    button1.addEventListener("click", e => {
        document.getElementById("firstpage1").hidden = false;
        document.getElementById("firstpage2").hidden = false;
        document.getElementById("firstpage3").hidden = true;
        document.getElementById("firstpage4").hidden = true;
        document.getElementById("firstpage5").hidden = true;
        document.getElementById("firstpage6").hidden = true;
        document.getElementById("firstpage7").hidden = true;

    })

    button2.addEventListener("click", e => {
        document.getElementById("firstpage1").hidden = true;
        document.getElementById("firstpage2").hidden = true;
        document.getElementById("firstpage3").hidden = false;
        document.getElementById("firstpage4").hidden = false;
        document.getElementById("firstpage5").hidden = true;
        document.getElementById("firstpage6").hidden = true;
        document.getElementById("firstpage7").hidden = true;

    })
    button3.addEventListener("click", e => {
        document.getElementById("firstpage1").hidden = true;
        document.getElementById("firstpage2").hidden = true;
        document.getElementById("firstpage3").hidden = true;
        document.getElementById("firstpage4").hidden = true;
        document.getElementById("firstpage5").hidden = false;
        document.getElementById("firstpage6").hidden = false;
        document.getElementById("firstpage7").hidden = true;
    })
    button4.addEventListener("click", e => {
        document.getElementById("firstpage1").hidden = true;
        document.getElementById("firstpage2").hidden = true;
        document.getElementById("firstpage3").hidden = true;
        document.getElementById("firstpage4").hidden = true;
        document.getElementById("firstpage5").hidden = true;
        document.getElementById("firstpage6").hidden = true;
        document.getElementById("firstpage7").hidden = false;
    })
    let x = false;
    panier.addEventListener("click", e => {
        if (x === false) {
            panierlist.style.display = 'block';
            x = true;
        } else {
            panierlist.style.display = 'none';
            x = false;
        }

    })
    panier2.addEventListener("click", e => {
        if (x === false) {
            panierlist.style.display = 'block';
            x = true;
        } else {
            panierlist.style.display = 'none';
            x = false;
        }
    })
    for (let i = 0; i < addbuttons.length; i++) {
        addbuttons[i].addEventListener("click", (e) => {
            panierlist.style.display = 'block';
            productsbought = productsbought + 1;
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


    var data = JSON.parse(localStorage.getItem("items"));
    var arrayToStore = []
    data ? arrayToStore.push(...data) : arrayToStore
    var containerElement = document.getElementById("panierlist");

    for (let i = 0; i < probtn.length; i++) {
        probtn[i].addEventListener("click", e => {
            arrayToStore.push(shoplist[i])
            
            for (let j = 0; j < arrayToStore.length; j++) {
                let data = JSON.stringify(arrayToStore)
                localStorage.setItem("items", data)
            }
            putList()
        });
    }

// localStorage.removeItem("items")

    data ? putList() : null

    var divList = 0;
    function putList() {
        // data.map((item, idx) => {
        //         divList = `<div class=" px-5 py-20 mr-4 flex flex-row text-white gap-4" id="productlist2">
        //     <img src="${item.Image}" alt=".." id="prdimage" class="w-3/6">
        //     <h6 id="productname">${item.name}</h6>
        //     <h6 id="prdprice">${item.price}</h6>
        // </div>`
        //     onePart.innerHTML = divList
        //     containerElement.appendChild(onePart)
        //     console.log(onePart);
        // })
        data.forEach(item => {
            divList = `<div class=" px-5 py-20 mr-4 flex flex-row text-white gap-4" id="productlist2">
                <img src="${item.Image}" alt=".." id="prdimage" class="w-3/6">
                <h6 id="productname">${item.name}</h6>
                <h6 id="prdprice">${item.price}</h6>
            </div>`
            containerElement.innerHTML += divList;
        });
    }


});

