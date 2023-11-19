
/********** *//*********** */

//objects//

const shoplist = [
    pro1 = { name: "Mecanique Keyboard Spartan", price: "70", type: "Accessories", Image: "brief4Assets/keyboard1.png", customize: ["lightkeybordselect"], customaze: true, quantite: 1 },
    pro2 = { name: "Ancient souls", price: "45", type: "Video_Games", Image: "brief4Assets/ancientsouls.png", quantite: 1 },
    pro3 = { name: "Mecanique Keyboard Razer", price: "70", type: "Accessories", Image: "brief4Assets/keyboard2.png", customize: ["lightkeybordselect"], customaze: true, quantite: 1 },
    pro4 = { name: "Gaming Chair Mach", price: "200", type: "Accessories", Image: "brief4Assets/gamingchair.png", customize: ["chair color"], customaze: true, quantite: 1 },
    pro5 = { name: "Echo Headphones", price: "100", type: "Accessories", Image: "brief4Assets/headphones1.jpg", customize: ["color"],  quantite: 1 },
    pro6 = { name: "Wave Console", price: "30", type: "console", Image: "brief4Assets/console.png", customize: ["color"], customaze: true, quantite: 1 },
    pro7 = { name: "Wireless Gaming Mouse", price: "65", type: "console", Image: "brief4Assets/mouse.png", customize: ["color"],  quantite: 1 },
    pro8 = { name: "Gaming Setup", price: "1050", type: "fullsetup", Image: "brief4Assets/fullsetup.png", customize: ["color", "storage", "graphiquecarte"],  quantite: 1 },
    pro9 = { name: "Razer Headphones", price: "70", type: "Accessories", Image: "brief4Assets/headphones2.png", customize: ["color"], customaze: true, quantite: 1 },
    pro10 = { name: "Mach Gaming chair", price: "200", type: "Accessories", Image: "brief4Assets/gamingchair2.jpg", customize: ["chair color"], customaze: true, quantite: 1 },
    pro11 = { name: "TUFF Gaming Monitor 120Hz", type: "Accessories", price: "300", Image: "brief4Assets/monitor2.jpg", customize: ["rafraîchissementToPage"], customaze: true, quantite: 1 },
    pro12 = { name: "Nvidia Gtx1080ti", type: "Accessories", price: "400", Image: "brief4Assets/graphiccard 1.png", customize: ["color"], customaze: true, quantite: 1 },
    pro13 = { name: "Semi-mecanique Keyboard Zoei", type: "Accessories", price: "80", Image: "brief4Assets/keyboard5 1.png", customize: ["lightkeybordselect"], customaze: true, quantite: 1 },
    pro14 = { name: "Playstation 5", price: "900", type: "console", Image: "brief4Assets/console 3.png", customize: ["color"],  quantite: 1 },
    pro15 = { name: "Kingdom come: Delivarnce", price: "12", type: "Video_Games", Image: "brief4Assets/videogame3 1.png", quantite: 1 },
    pro16 = { name: "Full Gaming Setup", price: "1500", type: "fullsetup", Image: "brief4Assets/setup2 1.png", customize: ["color", "storage", "graphiquecarte"], customaze: true, quantite: 1 },
    pro17 = { name: "Mecanique Keyboard", type: "Accessories", price: "90", Image: "brief4Assets/keyboard4 1.png", customize: ["lightkeybordselect"],  quantite: 1 },
    pro18 = { name: "Half Life 3", price: "450", type: "Video_Games", Image: "brief4Assets/halflife.png", customize: ["color"], quantite: 1 },
    pro19 = { name: "GTA 6", price: "2000", type: "Video_Games", Image: "brief4Assets/videogame.jpg", customize: ["color"],  quantite: 1 },
    pro20 = { name: "Amd RX 6800", price: "450", type: "Accessories", Image: "brief4Assets/amd 1.png", customize: ["color"], customaze: true, quantite: 1 },
]






/********************************************* */


document.addEventListener("DOMContentLoaded", function () {

    const productsContainer = document.getElementById('productsContainer')
    shoplist.forEach((product, index) => {
        productsContainer.innerHTML += `
        <div class="productInfos flex flex-col ${product.type}  ">
                            <h2 class="text-center z-9">${product.name}</h2>
                            <img src="${product.Image}" alt="${product.name}">
                            <h2>Price : ${product.price}$</h2>
                            <div class="flex justify-between">
                                <button class="bg-violet-900 p-1 rounded-xl addbutton" id="pro${index + 1}btn">Add to List</button>
                                ${product.customaze !== undefined && product.customaze ? `<a href="personnalize.html?product=${index}&name=${product.name}" class="bg-violet-900 p-1 rounded-xl">Customize</a>` : ``}
                            </div>
                        </div>
        `
    })
    /****************PAGINATION**************************/
    const paginationButtons = document.querySelectorAll(".paginationButton")
    const allProducts = document.querySelectorAll(".productInfos")
    let withFilter = false;
    let page = 1;
    const paginationdiv = document.getElementById('paginationdiv');

 
   

    paginationButtons.forEach(button => {

        button.addEventListener('click', () => {
            page = parseInt(button.innerText)
            changeVisibility()
        })
    })
   const changeVisibility = () => {
        paginationdiv.hidden = withFilter
        allProducts.forEach((product, index) => {
            if ((index < (page * 5) && index >= (page * 5 - 5)) || withFilter) {
                product.hidden = false
            } else {
                product.hidden = true

            }
        })
    }
/*******************************************/
    const panier = document.getElementById('panier');
    const panier2 = document.getElementById('panier2');
    const panierlist = document.getElementById('panierlist');
    // products categories
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
        pro18btn = document.getElementById('pro18btn'),
        pro19btn = document.getElementById('pro19btn'),
        pro20btn = document.getElementById('pro20btn')
    ]



    let x = false;
    panier.addEventListener("click", e => {
        if (x === false) {
            panierlist.style.display = 'flex';
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
        });

    }

    Accessoriesbutton.addEventListener("click", e => {
        resetFilters();
        for (let i = 0; i < Accessories.length; i++) {
            Accessories[i].style.display = "block";
        }
        console.log("hello");
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
        withFilter = false
        changeVisibility()
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
        withFilter = true
        changeVisibility()
    }

/********************FONCTION POUR LOCAL STORAGE ET POUR LE PANIER ET ********************/ 
    let data = JSON.parse(localStorage.getItem("items"));
    let arrayToStore = []
    data ? arrayToStore.push(...data) : arrayToStore
    let containerElement = document.getElementById("panierlist");

    for (let i = 0; i < probtn.length; i++) {
        probtn[i].addEventListener("click", e => {
            arrayToStore.push(shoplist[i])

            for (let j = 0; j < arrayToStore.length; j++) {
                let data = JSON.stringify(arrayToStore)
                localStorage.setItem("items", data)

            }
            putList()
            console.log("rebuild")
        });

    }
    /****/


    data ? putList() : null

    var divList = 0;
    function putList() {
        let containerElementCart = document.getElementById("poductlist1")

        containerElementCart.innerHTML = arrayToStore.length <= 0 ? "<h3>No Items Selected</h3>" : "";
        data = JSON.parse(localStorage.getItem("items"));
        data.forEach(item => {
            divList = `
            <div class="py-8  flex flex-col items-center   text-white gap-4 " id="productlist2">
            <div class="flex flex-col items-center ">
            <img src="${item.Image}" alt=".." id="prdimage" class="w-[100px] h-[100px]">
            <h6 id="productname">${item.name}</h6>
            </div>
            <div class="flex justify-between  w-2/3">
            <h6 id="prdprice">${item.price}$</h6> 
            <div class="flex justify-around items-center bg-black ">
            <button class=" plus bg-slate-800 h-4 px-[10px]  rounded flex items-center p-2 ">+</button>
            <h6 class="quantite ">${item.quantite}</h6> 
            
            <button class=" moins bg-slate-800 h-4 px-[10px]  rounded flex items-center p-2 ">-</button> 
            </div>
           
            
            </div>
            <button class="remove-button bg-slate-800 h-10 px-3 rounded-xl w-52 ">Remove</button>
             </div>
             
             
           <hr class="opacity-90">
           `;
            containerElementCart.innerHTML += divList;

        });
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const parentElement = event.target.parentElement;
                const productIndex = Array.from(containerElementCart.children).indexOf(parentElement);
                arrayToStore.splice(productIndex, 1);
                localStorage.setItem("items", JSON.stringify(arrayToStore));
                parentElement.remove();
            });
        });


    }
    const plus = document.querySelectorAll(".plus");
    const moins = document.querySelectorAll(".moins")
    plus.forEach((plusButton, productIndex) => {

        plusButton.addEventListener("click", () => {
            console.log("plus")
            arrayToStore[productIndex].quantite++;
            console.log(arrayToStore[productIndex].quantite)
            // Update the displayed quantity
            document.querySelectorAll(".quantite")[productIndex].innerText = arrayToStore[productIndex].quantite;

            // Update the localStorage
            localStorage.setItem("items", JSON.stringify(arrayToStore));
        });
    });

    moins.forEach((moins, productIndex) => {
        moins.addEventListener("click", () => {
            while (arrayToStore[productIndex].quantite > 1) {
                arrayToStore[productIndex].quantite--;
                console.log(arrayToStore[productIndex].quantite)
                document.querySelectorAll(".quantite")[productIndex].innerText = arrayToStore[productIndex].quantite;
                localStorage.setItem("items", JSON.stringify(arrayToStore))
            }
        });
    });



});
/********** */

const urlParam = new URLSearchParams(window.location.search)
const productIndex = urlParam.get("product")

const selectedProduct = shoplist[productIndex]

const optionsContainer = document.getElementById("optionsContainer")
const productDetails = document.getElementById("productDetails")


const addProductDetails = () => {
    productDetails.innerHTML = `<img class=" mt-4 mb-8 w-96 flex justify-center " src="${selectedProduct.Image}" alt="">
    <div class=" flex flex-col items center  gap-5 flex-wrap ">
    <div class=" w-96 ">
    <h4 class=" text-gray-50 underline">DETAILS</h4>
    
    <p class=" w-96 text-gray-50">${selectedProduct.name}</p>
    <p class=" w-96 text-gray-50">TOTAL  :    ${selectedProduct.price}    +     customization price</p>
    </div>
    
    </div>`

}


if (productIndex !== null) {
    addProductDetails()
}
const addColorlightkeyboardCustomizeToPage = () => {
    optionsContainer.innerHTML += `<h5 class="underline">light keyboard </h5>
    <div class="color-container  flex justify-around  ">
    <div>
    
    <label for="silver" class="border-2 border-red-500 rounded p-2 h-8 w-16 :hover">RED</label>
        <input type="radio" name="keyboardcolor" id="silver" value="10">
    </div>
    <div>
    
    <label for="white" class="border-2 border-red rounded p-2 h-8 w-16 :hover">RGB</label>
    <input type="radio" name="keyboardcolor" id="white" value="20">
    </div>
    <div>
    <label for="black"class="border-2 border-blue-600 rounded p-2 h-8 w-16 :hover" >Blue</label>
    <input type="radio" name="keyboardcolor" id="BLUE" value="30">
    </div>
    </div>`
}
const addtauxderafraîchissementToPage = () => {
    optionsContainer.innerHTML += `<h5 class="underline">REFRECH RATE</h5>
    <div class="color-container  flex justify-around  ">
    <div>
    <label for="silver" class="border-2 border-white rounded px-2 h-8 w-16 :hover">120 Hz(by default)</label>
    <input type="radio" name="rafraîchissement" value="0">
    </div>
    <div>
    <label for="silver" class="border-2 border-white rounded px-2 h-8 w-16 :hover">144 Hz</label>
    <input type="radio" name="rafraîchissement" value="10">
    </div>
    <div>
    <label for="silver" class="border-2 border-white rounded px-2 h-8 w-16 :hover">165 Hz</label>
    <input type="radio" name="rafraîchissement" value="20">
    </div>
    <div>
    <label for="silver" class="border-2 border-white rounded px-2 h-8 w-16 :hover">240 Hz</label>
    <input type="radio" name="rafraîchissement" value="30">
    </div>
    </div>`
}
const addchairColorCustomizeToPage = () => {
    optionsContainer.innerHTML += `<h5 class="underline">light keyboard </h5>
    <div class="color-container  flex justify-around  ">
    <div>
    
    <label for="silver" class="border-2 border-red-500 rounded p-2 h-8 w-16 :hover">RED</label>
        <input type="radio" name="chaircolor" id="silver" value="10">
    </div>
    <div>
    
    <label for="white" class="border-2 border-orange-500 rounded p-2 h-8 w-16 :hover">ORANGE</label>
    <input type="radio" name="chaircolor" id="white" value="20">
    </div>
    <div>
    <label for="black"class="border-2 border-blue-600 rounded p-2 h-8 w-16 :hover" >Blue</label>
    <input type="radio" name="chaircolor" id="BLUE" value="30">
    </div>
    </div>`
}

const addColorCustomizeToPage = () => {
    optionsContainer.innerHTML += `<h5 class="underline">COLOR</h5>
    <div class="color-container  flex justify-around  ">
    <div>
    <label for="silver" class="border-2 border-white rounded px-2 h-8 w-16 :hover">Silver</label>
    <input type="radio" name="color" id="silver" value="10">
    </div>
    <div>
    <label for="white">White</label>
    <input type="radio" name="color" id="white" value="20">
    </div>
    <div>
    <label for="black">Black</label>
    <input type="radio" name="color" id="black" value="30">
    </div>
    </div>`
}

const addStorageCustomizeToPage = () => {
    optionsContainer.innerHTML += `<h5 class="underline">STORAGE MEMORY</h5>
    <div class="  flex justify-around  ">
    <div>
    <label for="hdd">HDD</label>
    <input class="priceglobal" type="radio" name="storage" id="hdd" value="0">
    </div>
    <div>
    <label for="ssd">SSD</label>
        <input class="priceglobal" type="radio" name="storage" id="ssd" value="50">
    </div>
</div>
<select  class=" priceglobal  p-2 rounded text-black max-w-fit mx-auto" id="optionstorage">
<option value="0" selected disabled hidden>CHOOSE YOUR STORAGE MEMORY</option>
<option value="250">250gb</option>
<option value="500">500gb</option>
<option value="1000">1tb</option>
<option value="2000">2tb</option>
<option value="3000">3tb</option>
</select>`
}
/****** */
const addcartegraphiquecustomizetopage = () => {
    optionsContainer.innerHTML += ` <h5 class="underline">CARTE GRAPHIQUE</h5>
    <div class="  flex justify-around  ">
    <button id="NVIDIA-button" class="border-2 border-white rounded h-8 w-16" data-price="0">NVIDIA</button>
    <button id="AMD-button" class="border-2 border-white rounded h-8 w-16" data-price="50">AMD</button>
    <button id="INTEL-button" class="border-2 border-white rounded h-8 w-16" data-price="100">INTEL</button>
    </div>
    <div  id="containeroptions"></div>
    <h5 class="underline">PROCESSEUR</h5>
    <div class="  flex justify-around  ">
    
    <button id="processeur1" class="  border-2 border-white rounded h-8 w-16 :hover"> AMD</button>
    <button id="processeur2" class=" border-2 border-white rounded h-8 w-16 :hover"> INTEL</button>
    </div>
    <div  id="processeuroptions"></div>
    
    
    `}

/*** */
const addTotal = () => {
    optionsContainer.innerHTML += `<div class="  border-2 border-purple-800 inline">
        <p class="p-3">customization price: $<span id="total"> 0</p>
        </div>
        

        <hr>
        <button  onClick="addtoprice()" class="bg-violet-900 p-1 rounded-xl addbutton mb-3" id="customizeBtn"><a href="products.html"> Add to List</a></button>`
    const customizeButton = document.getElementById("customizeBtn");
    customizeButton.addEventListener("click", () => {
        // Ajouter le produit au panier du local storage ici
        const data = JSON.parse(localStorage.getItem("items")) || [];
        let TotalP = 0;
        TotalP = parseInt(selectedProduct.price) + parseInt(totalValue.textContent);
        selectedProduct.price = TotalP
        console.log("i'm here");
        data.push(selectedProduct);
        console.log("i'm here");
        localStorage.setItem("items", JSON.stringify(data));
    });
}





if (shoplist[productIndex] && shoplist[productIndex].customize) {
    const customizeOptions = shoplist[productIndex].customize;
    customizeOptions.forEach(option => {
        switch (option) {
            case 'color':
                addColorCustomizeToPage();
                break;
            case 'storage':
                addStorageCustomizeToPage();
                break;
            case 'graphiquecarte':
                addcartegraphiquecustomizetopage();
                break; // Assurez-vous d'ajouter un "break" ici pour éviter d'exécuter les autres cas
            case 'lightkeybordselect':
                addColorlightkeyboardCustomizeToPage();
                break;
            case 'chair color':
                addchairColorCustomizeToPage();
                break;
            case 'rafraîchissementToPage':
                addtauxderafraîchissementToPage();
                break;
        }
    });
    addTotal();
} else {
    optionsContainer.innerHTML = `<h1>You can't customize this item</h1>`;
}
var processeurvalue = 0
const processeurselect = document.getElementById("processeuroptions")
const processeuramdbutton = document.getElementById("processeur1")
const processeurintelbutton = document.getElementById("processeur2")
var hardwarevalue = 0
const intelbutton = document.getElementById("INTEL-button")
const amdbutton = document.getElementById("AMD-button")
const nvidiabutton = document.getElementById("NVIDIA-button")
const containerselect = document.getElementById("containeroptions")
const colorSelect = document.querySelectorAll("input[type='radio'][name='color']")
const lightkeybordselect = document.querySelectorAll("input[type='radio'][name='keyboardcolor']")
const rafraîchissementselect = document.querySelectorAll("input[type='radio'][name='rafraîchissement']")
const totalValue = document.querySelector("#total")
const Valueproduct2 = document.querySelector("#total2")
const Valueproduct3 = document.querySelector("#total3")
const storageValue = document.getElementById("optionstorage")
const colorclavier = document.querySelectorAll("input[type='radio'][name='colorclavier']")
const chaircolorselect = document.querySelectorAll("input[type='radio'][name='chaircolor']")
const hardWareSelect = document.querySelectorAll("input[type='radio'][name='storage']")

var totalPrice = 0

const getrafraîchissementvalue = () => {
    let Refraich = 0;

    rafraîchissementselect.forEach(input => {
        if (input.checked) {
            Refraich = input.value
        }
    })
    return parseInt(Refraich)
}

const getColorValue = () => {
    let colorPrice = 0
    colorSelect.forEach(input => {
        if (input.checked) {
            colorPrice = input.value
        }
    })
    return parseInt(colorPrice)
}
const getlightkeybordselect = () => {
    console.log("lightkeybordselect");
    let lightkeybordcolorprice = 0
    lightkeybordselect.forEach(input => {
        if (input.checked) {
            lightkeybordcolorprice = input.value
        }
    })
    return parseInt(lightkeybordcolorprice)
}
const getchaircolorselect = () => {

    let chaircolorprice = 0
    chaircolorselect.forEach(input => {
        if (input.checked) {
            chaircolorprice = input.value
        }
    })
    return parseInt(chaircolorprice)
}
const getHardWareValue = () => {
    let hardWarePrice = 0
    hardWareSelect.forEach(input => {
        if (input.checked) {
            hardWarePrice = input.value
        }
    })
    return parseInt(hardWarePrice)
}
const getStorageValue = () => {
    let storagePrice = getHardWareValue() + parseInt(storageValue.value)

    return parseInt(storagePrice)
}

chaircolorselect.forEach(input => {
    input.addEventListener("click", () => {
        totalPrice = getchaircolorselect()
        totalValue.textContent = totalPrice
    })
})
lightkeybordselect.forEach(input => {
    input.addEventListener("click", () => {
        totalPrice = getlightkeybordselect()
        totalValue.textContent = totalPrice
    })
})
rafraîchissementselect.forEach(input => {
    input.addEventListener("click", () => {
        totalPrice = getrafraîchissementvalue()
        totalValue.textContent = totalPrice
    })
})

colorSelect.forEach(input => {
    input.addEventListener("click", () => {
        totalPrice = getColorValue()
        totalValue.textContent = totalPrice
    })
})

/******************************** */

/******************************* */
function create(id) {
    const select = document.createElement('select')
    select.id = "cartenvidia"
    console.log(id);
    if (id == "NVIDIA-button") {
        console.log("nvidia")

        select.innerHTML = `<option value="0" selected disabled hidden>CHOOSE YOUR CARTE</option>
        <option value="4090">RTX 4090</option>
        <option value="4070"> RTX 4070</option>
        <option value="4060"> GeForce RTX 4060</option>
        <option value="4080">GeForce RTX 4080</option>
        <option value="4065">RTX 4060 Ti</option>`

    } if
        (id == "AMD-button") {
        console.log("amd");
        select.innerHTML = `<option value="0" selected disabled hidden>CHOOSE YOUR CARTE</option>
        
        <option value="7900 ">Radeon RX 7900 XTX</option>
        <option value=" 7600"> Radeon RX 7600</option>
        <option value="7800 ">Radeon RX 7800 XT</option>
        <option value="7900 ">Radeon RX 7900 XT</option>
        <option value="6700 "> Radeon RX 6700 XT</option>`

    }
    if (id == "INTEL-button") {

        select.innerHTML = `<option value="0" selected disabled hidden>CHOOSE YOUR CARTE</option>
        
        <option value="0" selected disabled hidden>CHOOSE YOUR CARTE</option>
        <option value="750">Arc A750</option>
        <option value="380"> Arc A380</option>
        `
    }
    select.classList.add('text-black', 'priceglobal', 'max-w-fit', 'mx-auto', 'p-2', 'rounded');
    select.addEventListener("change", () => {
        hardwarevalue = parseInt(select.value)

    })
    containerselect.innerHTML = ''
    containerselect.appendChild(select)
}
nvidiabutton.addEventListener("click", function () {
    create("NVIDIA-button")
})
amdbutton.addEventListener("click", function () {
    create("AMD-button")
})
intelbutton.addEventListener("click", function () {
    create("INTEL-button")
})




function createprocesseurselect(id) {
    console.log("createprocesseurselect");
    const selectprocesseur = document.createElement('select')
    if (id == "processeur1") {
        selectprocesseur.innerHTML = `
        <option value="0" selected disabled hidden>CHOOSE YOUR processeur</option>
        <option value="10">Ryzen 5 7600</option>
        <option value="20">Ryzen 7 7800X3D</option>
        <option value="30">Ryzen 7 5800X3D</option>
        <option value="40">Ryzen 9 7950X3D</option>
        <option value="50">Ryzen 5 7600X</option>
        <option value="60">Ryzen 5 5600X</option>
        <option value="70">AMD Ryzen 5 5600G</option>
        `
    }
    if (id == "processeur2") {
        console.log("processeur2");
        selectprocesseur.innerHTML = `
        <option value="0" selected disabled hidden>CHOOSE YOUR processeur</option>
        <option value="5">Core i3-13100F</option>
        <option value="15">Core i5-13600K</option>
        <option value="25">Core i9-13900K</option>
        <option value="35">Core i7-13700K</option>
        <option value="45">Intel Core i5-13400</option>
        `
    }
    selectprocesseur.classList.add('text-black', 'priceglobal', 'max-w-fit', 'mx-auto', 'p-2', 'rounded');
    selectprocesseur.addEventListener("change", () => {
        processeurvalue = parseInt(selectprocesseur.value)

    })
    processeurselect.innerHTML = ''
    processeurselect.appendChild(selectprocesseur)

}
processeuramdbutton.addEventListener("click", function () {
    createprocesseurselect("processeur1")
})
processeurintelbutton.addEventListener("click", function () {
    createprocesseurselect("processeur2")
})


















function totalCalcul() {
    console.log('hahahha');

    console.log('her');

    totalPrice = getColorValue() + getStorageValue() + getlightkeybordselect() + getrafraîchissementvalue() + getchaircolorselect() + hardwarevalue + processeurvalue
    totalValue.textContent = totalPrice


}
document.documentElement.addEventListener('click', totalCalcul)






